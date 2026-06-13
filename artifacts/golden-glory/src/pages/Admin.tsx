import React, { useState, useEffect } from 'react';
import PageTransition from '@/components/PageTransition';
import { supabase } from '../lib/supabase';
import { Lock, Unlock, RefreshCw, Trash2, Mail, Phone, Calendar, User, LayoutDashboard, IndianRupee, Image as ImageIcon, Edit2, X, Save, Upload, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const [activeTab, setActiveTab] = useState<'inquiries' | 'pricing'>('inquiries');
  
  // Inquiries State
  const [messages, setMessages] = useState<any[]>([]);
  const [isLoadingMessages, setIsLoadingMessages] = useState(false);

  // Pricing State
  const [pricingPlans, setPricingPlans] = useState<any[]>([]);
  const [isLoadingPricing, setIsLoadingPricing] = useState(false);
  const [editingPlan, setEditingPlan] = useState<any | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);

  const ADMIN_PASSWORD = '123';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
      fetchMessages();
      fetchPricingPlans();
    } else {
      setError('Incorrect password');
    }
  };

  // --- INQUIRIES LOGIC ---
  const fetchMessages = async () => {
    setIsLoadingMessages(true);
    try {
      const { data, error } = await supabase.from('contacts').select('*').order('created_at', { ascending: false });
      if (error) throw error;
      setMessages(data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoadingMessages(false);
    }
  };

  const handleDeleteMessage = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this message?')) return;
    try {
      const { error } = await supabase.from('contacts').delete().eq('id', id);
      if (error) throw error;
      setMessages(messages.filter(msg => msg.id !== id));
    } catch (err) {
      console.error(err);
      alert('Failed to delete message.');
    }
  };

  // --- PRICING LOGIC ---
  const fetchPricingPlans = async () => {
    setIsLoadingPricing(true);
    try {
      const { data, error } = await supabase.from('pricing_plans').select('*').order('id', { ascending: true });
      if (error) throw error;
      setPricingPlans(data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoadingPricing(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${fileName}`;

    setUploadingImage(true);
    try {
      const { error: uploadError } = await supabase.storage
        .from('images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage.from('images').getPublicUrl(filePath);
      
      setEditingPlan({ ...editingPlan, image: data.publicUrl });
    } catch (error: any) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image. Please check if bucket is created.');
    } finally {
      setUploadingImage(false);
    }
  };

  const handleSavePlan = async () => {
    if (!editingPlan) return;
    setIsSaving(true);
    try {
      const { error } = await supabase
        .from('pricing_plans')
        .update({
          title: editingPlan.title,
          price: editingPlan.price,
          suffix: editingPlan.suffix,
          best_for: editingPlan.best_for,
          feats: editingPlan.feats,
          image: editingPlan.image,
          is_premium: editingPlan.is_premium,
          highlighted: editingPlan.highlighted
        })
        .eq('id', editingPlan.id);

      if (error) throw error;
      
      setEditingPlan(null);
      fetchPricingPlans(); // Refresh
      alert('Plan updated successfully! The website is now updated.');
    } catch (err) {
      console.error(err);
      alert('Failed to save plan.');
    } finally {
      setIsSaving(false);
    }
  };

  const updateFeature = (index: number, value: string) => {
    const newFeats = [...editingPlan.feats];
    newFeats[index] = value;
    setEditingPlan({ ...editingPlan, feats: newFeats });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  };

  if (!isAuthenticated) {
    return (
      <PageTransition>
        <div className="min-h-screen pt-32 pb-20 bg-[#f4f9fd] flex items-center justify-center px-4">
          <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl w-full max-w-md border border-black/5 text-center fade-up">
            <div className="w-20 h-20 bg-[#F6F2EB] rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock className="w-10 h-10 text-[#432c1c]" />
            </div>
            <h1 className="text-3xl font-sans font-bold text-[#111] mb-2">Admin Panel</h1>
            <p className="text-gray-500 mb-8 font-light">Please enter the password to access the CMS.</p>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  className="w-full bg-[#f8f8f8] border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#ffa602] transition-colors text-center font-medium tracking-widest"
                />
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              </div>

              <Button type="submit" className="w-full h-12 rounded-xl bg-[#ffa602] text-[#111] hover:bg-[#e09612] font-bold tracking-wider uppercase transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <Unlock className="w-5 h-5" />
                Unlock Dashboard
              </Button>
            </form>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-20 bg-[#f4f9fd]">
        <div className="container mx-auto px-4 max-w-7xl">
          
          {/* Header & Tabs */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10 fade-up">
            <div>
              <h1 className="text-4xl md:text-5xl font-sans font-bold text-[#111] mb-2">Dashboard</h1>
              <p className="text-gray-500 text-lg">Manage your website content and inquiries.</p>
            </div>
            
            <div className="flex bg-white rounded-xl shadow-sm border border-gray-200 p-1">
              <button 
                onClick={() => setActiveTab('inquiries')}
                className={`px-6 py-2.5 rounded-lg flex items-center gap-2 font-bold transition-all ${activeTab === 'inquiries' ? 'bg-[#432c1c] text-[#ffa602]' : 'text-gray-500 hover:bg-gray-50'}`}
              >
                <Mail className="w-4 h-4" /> Inquiries
              </button>
              <button 
                onClick={() => setActiveTab('pricing')}
                className={`px-6 py-2.5 rounded-lg flex items-center gap-2 font-bold transition-all ${activeTab === 'pricing' ? 'bg-[#432c1c] text-[#ffa602]' : 'text-gray-500 hover:bg-gray-50'}`}
              >
                <IndianRupee className="w-4 h-4" /> Pricing Plans
              </button>
            </div>
          </div>

          {/* ================= INQUIRIES TAB ================= */}
          {activeTab === 'inquiries' && (
            <div className="bg-white rounded-[2rem] shadow-xl border border-black/5 overflow-hidden fade-up">
              <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                <h2 className="text-xl font-bold flex items-center gap-2"><Mail className="w-5 h-5 text-[#ffa602]" /> Recent Messages</h2>
                <Button onClick={fetchMessages} disabled={isLoadingMessages} variant="outline" className="gap-2">
                  <RefreshCw className={`w-4 h-4 ${isLoadingMessages ? 'animate-spin' : ''}`} /> Refresh
                </Button>
              </div>

              {isLoadingMessages && messages.length === 0 ? (
                <div className="p-20 text-center text-gray-500 flex flex-col items-center">
                  <RefreshCw className="w-10 h-10 animate-spin text-[#ffa602] mb-4" />
                  <p className="text-lg">Loading messages...</p>
                </div>
              ) : messages.length === 0 ? (
                <div className="p-20 text-center text-gray-500 flex flex-col items-center">
                  <Mail className="w-12 h-12 text-gray-300 mb-4" />
                  <p className="text-xl font-medium text-gray-800">No messages yet</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#432c1c] text-white text-sm uppercase tracking-wider">
                        <th className="p-5 font-medium whitespace-nowrap">Date</th>
                        <th className="p-5 font-medium whitespace-nowrap">Contact Details</th>
                        <th className="p-5 font-medium w-1/2">Message</th>
                        <th className="p-5 font-medium text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {messages.map((msg) => (
                        <tr key={msg.id} className="hover:bg-gray-50/50 transition-colors group">
                          <td className="p-5 align-top">
                            <div className="flex items-center gap-2 text-sm text-gray-500 font-medium whitespace-nowrap">
                              <Calendar className="w-4 h-4 text-[#ffa602]" />
                              {formatDate(msg.created_at)}
                            </div>
                          </td>
                          <td className="p-5 align-top">
                            <div className="space-y-2">
                              <div className="flex items-center gap-2 font-bold text-gray-900"><User className="w-4 h-4 text-gray-400" />{msg.name}</div>
                              <div className="flex items-center gap-2 text-sm text-gray-600"><Mail className="w-4 h-4 text-gray-400" />{msg.email}</div>
                              <div className="flex items-center gap-2 text-sm text-gray-600"><Phone className="w-4 h-4 text-gray-400" />{msg.phone}</div>
                            </div>
                          </td>
                          <td className="p-5 align-top">
                            <div className="bg-[#F6F2EB] rounded-xl p-4 text-gray-700 italic border-l-4 border-[#ffa602]">
                              {msg.message}
                            </div>
                          </td>
                          <td className="p-5 align-top text-right">
                            <button onClick={() => handleDeleteMessage(msg.id)} className="p-3 bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-colors opacity-0 group-hover:opacity-100">
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* ================= PRICING PLANS TAB ================= */}
          {activeTab === 'pricing' && (
            <div className="space-y-6 fade-up">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold flex items-center gap-2"><IndianRupee className="w-5 h-5 text-[#ffa602]" /> Manage Pricing Plans</h2>
                  <p className="text-sm text-gray-500 mt-1">Changes made here will instantly reflect on the live website.</p>
                </div>
                <Button onClick={fetchPricingPlans} disabled={isLoadingPricing} variant="outline" className="gap-2">
                  <RefreshCw className={`w-4 h-4 ${isLoadingPricing ? 'animate-spin' : ''}`} /> Refresh
                </Button>
              </div>

              {isLoadingPricing ? (
                <div className="p-20 text-center"><RefreshCw className="w-10 h-10 animate-spin text-[#ffa602] mx-auto" /></div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pricingPlans.map((plan) => (
                    <div key={plan.id} className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 flex flex-col group relative">
                      {plan.is_premium && <div className="absolute top-4 right-4 bg-[#ffa602] text-xs font-bold px-3 py-1 rounded-full z-10">Premium</div>}
                      <div className="h-48 relative overflow-hidden bg-gray-100">
                        <img src={plan.image} alt={plan.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Button onClick={() => setEditingPlan(plan)} className="bg-[#ffa602] text-black hover:bg-white gap-2">
                            <Edit2 className="w-4 h-4" /> Edit Plan
                          </Button>
                        </div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                        <div className="text-3xl font-bold text-[#ffa602] mb-4">₹{plan.price} <span className="text-sm text-gray-500">{plan.suffix}</span></div>
                        <p className="text-sm text-gray-600 line-clamp-2 mb-4">{plan.best_for}</p>
                        <Button onClick={() => setEditingPlan(plan)} variant="outline" className="mt-auto w-full border-[#ffa602] text-[#ffa602] hover:bg-[#ffa602] hover:text-black">
                          Edit Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>
      </div>

      {/* ================= EDIT PLAN MODAL ================= */}
      {editingPlan && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-[2rem] w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in zoom-in-95 duration-300">
            <button onClick={() => setEditingPlan(null)} className="absolute top-6 right-6 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
              <X className="w-6 h-6" />
            </button>
            
            <div className="p-8 md:p-10">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Edit2 className="w-8 h-8 text-[#ffa602]" />
                Edit Plan: {editingPlan.title}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Form Fields */}
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Plan Title</label>
                    <input type="text" value={editingPlan.title} onChange={e => setEditingPlan({...editingPlan, title: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:border-[#ffa602] outline-none" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Price (₹)</label>
                      <input type="text" value={editingPlan.price} onChange={e => setEditingPlan({...editingPlan, price: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:border-[#ffa602] outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Suffix (e.g. +GST/Mo)</label>
                      <input type="text" value={editingPlan.suffix} onChange={e => setEditingPlan({...editingPlan, suffix: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:border-[#ffa602] outline-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Best For (Short Description)</label>
                    <textarea value={editingPlan.best_for} onChange={e => setEditingPlan({...editingPlan, best_for: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:border-[#ffa602] outline-none min-h-[100px]" />
                  </div>

                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer bg-gray-50 p-3 rounded-xl border border-gray-200 flex-1">
                      <input type="checkbox" checked={editingPlan.is_premium} onChange={e => setEditingPlan({...editingPlan, is_premium: e.target.checked})} className="w-5 h-5 accent-[#ffa602]" />
                      <span className="font-bold text-sm">Is Premium Plan</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer bg-gray-50 p-3 rounded-xl border border-gray-200 flex-1">
                      <input type="checkbox" checked={editingPlan.highlighted} onChange={e => setEditingPlan({...editingPlan, highlighted: e.target.checked})} className="w-5 h-5 accent-[#432c1c]" />
                      <span className="font-bold text-sm">Highlight (Dark)</span>
                    </label>
                  </div>
                </div>

                {/* Right Column: Image & Features */}
                <div className="space-y-6">
                  {/* Image Upload */}
                  <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200">
                    <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2"><ImageIcon className="w-4 h-4 text-[#ffa602]" /> Plan Image</label>
                    <div className="h-40 w-full rounded-xl overflow-hidden mb-4 relative group border-2 border-dashed border-gray-300">
                      {editingPlan.image ? (
                        <img src={editingPlan.image} className="w-full h-full object-cover" alt="Preview" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
                      )}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                        <label className="cursor-pointer bg-[#ffa602] text-black font-bold py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-white transition-colors">
                          <Upload className="w-4 h-4" /> 
                          {uploadingImage ? 'Uploading...' : 'Upload New'}
                          <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} disabled={uploadingImage} />
                        </label>
                      </div>
                    </div>
                    <input type="text" value={editingPlan.image} onChange={e => setEditingPlan({...editingPlan, image: e.target.value})} placeholder="Or paste Image URL here" className="w-full text-xs bg-white border border-gray-200 rounded-lg px-3 py-2 outline-none focus:border-[#ffa602]" />
                  </div>

                  {/* Features List */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2"><Plus className="w-4 h-4 text-[#ffa602]" /> Features Included (Max 6)</label>
                    <div className="space-y-2">
                      {editingPlan.feats.map((feat: string, idx: number) => (
                        <input key={idx} type="text" value={feat} onChange={e => updateFeature(idx, e.target.value)} className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm focus:border-[#ffa602] outline-none" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-gray-100 flex justify-end gap-4">
                <Button onClick={() => setEditingPlan(null)} variant="outline" className="h-14 px-8 rounded-xl font-bold">Cancel</Button>
                <Button onClick={handleSavePlan} disabled={isSaving} className="h-14 px-10 rounded-xl bg-[#432c1c] text-white hover:bg-[#ffa602] hover:text-black font-bold tracking-wider uppercase text-lg flex items-center gap-2">
                  <Save className={`w-5 h-5 ${isSaving ? 'animate-pulse' : ''}`} />
                  {isSaving ? 'Saving...' : 'Save Changes'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

    </PageTransition>
  );
}
