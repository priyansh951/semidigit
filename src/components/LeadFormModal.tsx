import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Loader2 } from 'lucide-react';
import { cn } from '../lib/utils';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId: string | undefined;
    email: string | null | undefined;
    emailVerified: boolean | undefined;
    isAnonymous: boolean | undefined;
  }
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: undefined, // We don't have auth instance here easily without importing, but leads are public write
      email: undefined,
      emailVerified: undefined,
      isAnonymous: undefined,
    },
    operationType,
    path
  }
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
}

export default function LeadFormModal({ isOpen, onClose, initialProduct }: LeadFormModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: initialProduct || 'Other',
    message: ''
  });

  useEffect(() => {
    if (initialProduct) {
      setFormData(prev => ({ ...prev, product: initialProduct }));
    }
  }, [initialProduct]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const path = 'leads';
      await addDoc(collection(db, path), {
        ...formData,
        timestamp: serverTimestamp()
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, 'leads');
    }
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-surface border border-border-dim rounded-lg shadow-2xl overflow-hidden"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-text-muted hover:text-text-primary transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="p-8 md:p-12">
              {isSuccess ? (
                <div className="text-center py-8">
                  <div className="flex justify-center mb-6">
                    <CheckCircle2 className="w-16 h-16 text-accent" />
                  </div>
                  <h3 className="text-3xl font-black tracking-tighter mb-4">THANK YOU, {formData.name.split(' ')[0].toUpperCase()}.</h3>
                  <p className="text-text-secondary leading-relaxed">
                    We've received your requirement. Our engineering team will reach out to you within 24 hours.
                  </p>
                  <button
                    onClick={handleClose}
                    className="mt-10 bg-accent text-background px-8 py-3 rounded-sm font-bold"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-4xl font-black tracking-tighter mb-2 uppercase">Let's talk.</h3>
                  <p className="text-text-secondary text-sm mb-8">Tell us what you're looking for and we'll get back to you.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Full Name</label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-background border border-border-dim rounded-sm py-3 px-4 text-sm focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Email</label>
                        <input
                          required
                          type="email"
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@company.com"
                          className="w-full bg-background border border-border-dim rounded-sm py-3 px-4 text-sm focus:outline-none focus:border-accent transition-colors"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Phone</label>
                        <input
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={e => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 00000 00000"
                          className="w-full bg-background border border-border-dim rounded-sm py-3 px-4 text-sm focus:outline-none focus:border-accent transition-colors"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Product Interest</label>
                      <select
                        value={formData.product}
                        onChange={e => setFormData({ ...formData, product: e.target.value })}
                        className="w-full bg-background border border-border-dim rounded-sm py-3 px-4 text-sm focus:outline-none focus:border-accent transition-colors appearance-none"
                      >
                        <option>SEFSY</option>
                        <option>HOAUTO</option>
                        <option>Smart Water Meter</option>
                        <option>HPT Sensor</option>
                        <option>Smart Weighing Scale</option>
                        <option>Grain Moisture Meter</option>
                        <option>Fall Detector</option>
                        <option>Patient Calling System</option>
                        <option>Tygtron Sleep Monitor</option>
                        <option>Custom IoT Solution</option>
                        <option>Other</option>
                      </select>
                    </div>
                    
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Message (Optional)</label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Briefly describe your requirement..."
                        className="w-full bg-background border border-border-dim rounded-sm py-3 px-4 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                      />
                    </div>
                    
                    <button
                      disabled={isSubmitting}
                      type="submit"
                      className="w-full bg-accent text-background py-4 rounded-sm font-bold text-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 mt-4"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        'Send Requirement'
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
