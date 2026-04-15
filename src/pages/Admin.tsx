import { useState, useEffect } from 'react';
import { db, auth, signInWithGoogle } from '../firebase';
import { collection, query, orderBy, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { onAuthStateChanged, User } from 'firebase/auth';
import { motion } from 'motion/react';
import { Trash2, LogIn, LogOut, Mail, Phone, Building2, Clock, MessageSquare } from 'lucide-react';

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  product: string;
  message?: string;
  timestamp: any;
}

export default function Admin() {
  const [user, setUser] = useState<User | null>(null);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  const adminEmail = "priyansh2k03@gmail.com";

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      if (u && u.email === adminEmail) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (isAdmin) {
      const q = query(collection(db, 'leads'), orderBy('timestamp', 'desc'));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const leadsData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Lead[];
        setLeads(leadsData);
      }, (error) => {
        console.error("Error fetching leads:", error);
      });
      return () => unsubscribe();
    }
  }, [isAdmin]);

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this lead?")) {
      try {
        await deleteDoc(doc(db, 'leads', id));
      } catch (error) {
        console.error("Error deleting lead:", error);
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-6">
        <div className="max-w-md w-full text-center">
          <h1 className="text-4xl font-black tracking-tighter mb-6">ADMIN ACCESS</h1>
          <p className="text-text-secondary mb-8">Please sign in with your admin account to view inquiries.</p>
          <button
            onClick={signInWithGoogle}
            className="w-full bg-accent text-background py-4 rounded-sm font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all"
          >
            <LogIn className="w-5 h-5" />
            Sign in with Google
          </button>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-6">
        <div className="max-w-md w-full text-center">
          <h1 className="text-4xl font-black tracking-tighter mb-4 text-red-500">ACCESS DENIED</h1>
          <p className="text-text-secondary mb-8">
            You are signed in as <span className="text-text-primary font-bold">{user.email}</span>, which does not have admin privileges.
          </p>
          <button
            onClick={() => auth.signOut()}
            className="w-full border border-border-dim text-text-primary py-4 rounded-sm font-bold flex items-center justify-center gap-2 hover:bg-surface transition-all"
          >
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-5xl font-black tracking-tighter mb-2">INQUIRIES</h1>
            <p className="text-text-secondary">Manage and track your business leads from Firestore.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden md:block">
              <div className="text-sm font-bold">{user.displayName}</div>
              <div className="text-xs text-text-muted">{user.email}</div>
            </div>
            <button
              onClick={() => auth.signOut()}
              className="p-3 rounded-sm border border-border-dim hover:bg-surface transition-all text-text-muted hover:text-red-500"
              title="Sign Out"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid gap-6">
          {leads.length === 0 ? (
            <div className="py-20 text-center border border-dashed border-border-dim rounded-lg">
              <p className="text-text-muted">No inquiries found yet.</p>
            </div>
          ) : (
            leads.map((lead) => (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                key={lead.id}
                className="bg-surface border border-border-dim rounded-lg p-6 md:p-8 hover:border-accent/30 transition-all group"
              >
                <div className="flex flex-col md:flex-row justify-between gap-6">
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-2 py-1 bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-widest rounded">
                        {lead.product}
                      </span>
                      <span className="text-text-muted text-xs flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {lead.timestamp?.toDate().toLocaleString() || 'Just now'}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-6">{lead.name}</h3>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                      <div className="flex items-center gap-3 text-sm">
                        <Mail className="w-4 h-4 text-accent" />
                        <a href={`mailto:${lead.email}`} className="hover:text-accent transition-colors">{lead.email}</a>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Phone className="w-4 h-4 text-accent" />
                        <a href={`tel:${lead.phone}`} className="hover:text-accent transition-colors">{lead.phone}</a>
                      </div>
                      {lead.company && (
                        <div className="flex items-center gap-3 text-sm">
                          <Building2 className="w-4 h-4 text-accent" />
                          <span>{lead.company}</span>
                        </div>
                      )}
                    </div>

                    {lead.message && (
                      <div className="bg-background/50 p-4 rounded border border-border-dim/50 flex gap-3">
                        <MessageSquare className="w-4 h-4 text-accent shrink-0 mt-1" />
                        <p className="text-sm text-text-secondary italic">"{lead.message}"</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex md:flex-col justify-end gap-2">
                    <button
                      onClick={() => handleDelete(lead.id)}
                      className="p-3 rounded-sm border border-border-dim hover:bg-red-500/10 hover:text-red-500 transition-all"
                      title="Delete Lead"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
