import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Camera, CheckCircle, XCircle, Star, Heart, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { supabase } from '../../lib/supabase';

const CustomQuotes = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const onSubmit = async (data: any) => {
    try {
      // Create the message for both Formspree and Supabase
      const formattedMessage = `
Event Type: ${data.eventType}
Event Date: ${data.eventDate}
Location: ${data.location}
Guest Count: ${data.guestCount}
Budget Range: ${data.budget}
Requirements: ${data.requirements}
Phone: ${data.phone}
      `.trim();

      // Submit to Formspree
      const formspreeResponse = await fetch('https://formspree.io/f/xkgjoopp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          message: formattedMessage,
          _subject: `Custom Quote Request - ${data.eventType}`,
        }),
      });

      if (!formspreeResponse.ok) {
        throw new Error('Formspree submission failed');
      }

      // Insert the form data into Supabase
      const { error: supabaseError } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: `${data.firstName} ${data.lastName}`,
            email: data.email,
            message: formattedMessage
          }
        ]);

      if (supabaseError) {
        console.error('Supabase submission error:', supabaseError);
        setSubmitStatus('error');
        return;
      }

      setSubmitStatus('success');
      reset();
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    }
  };

  return (
    <div className="py-12 bg-gradient-to-b from-champagne to-white dark:from-slate dark:to-secondary">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Camera className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">Craft Your Perfect Package</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Every event is unique, and your photography package should be too. Let us create a customized solution that perfectly matches your vision and requirements.
          </p>
        </motion.div>

        {/* Why Choose Custom Section */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-secondary p-6 rounded-xl shadow-lg">
              <Heart className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Personalized Approach</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Tailored solutions that match your unique style and requirements.
              </p>
            </div>
            <div className="bg-white dark:bg-secondary p-6 rounded-xl shadow-lg">
              <Star className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Professional equipment and experienced photographers for exceptional results.
              </p>
            </div>
            <div className="bg-white dark:bg-secondary p-6 rounded-xl shadow-lg">
              <Calendar className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Accommodating your timeline with adaptable booking options.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <motion.div 
            className="mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-100 rounded-lg flex items-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <CheckCircle className="h-5 w-5 mr-2" />
            <p>Thank you for your inquiry! We'll create a custom package and get back to you within 24 hours.</p>
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div 
            className="mb-6 p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-100 rounded-lg flex items-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <XCircle className="h-5 w-5 mr-2" />
            <p>There was an error submitting your request. Please try again or contact us directly.</p>
          </motion.div>
        )}

        {/* Custom Quote Form */}
        <motion.form 
          onSubmit={handleSubmit(onSubmit)} 
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* Personal Information */}
          <div className="bg-white dark:bg-secondary p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Tell Us About Yourself</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  {...register("firstName", { required: "First name is required" })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                {errors.firstName && (
                  <span className="text-red-500 text-sm mt-1">{errors.firstName.message as string}</span>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  {...register("lastName", { required: "Last name is required" })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                {errors.lastName && (
                  <span className="text-red-500 text-sm mt-1">{errors.lastName.message as string}</span>
                )}
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Please enter a valid email"
                  }
                })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              {errors.email && (
                <span className="text-red-500 text-sm mt-1">{errors.email.message as string}</span>
              )}
            </div>
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                {...register("phone", { required: "Phone number is required" })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              {errors.phone && (
                <span className="text-red-500 text-sm mt-1">{errors.phone.message as string}</span>
              )}
            </div>
          </div>

          {/* Event Details */}
          <div className="bg-white dark:bg-secondary p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Event Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Event Type
                </label>
                <select
                  {...register("eventType", { required: "Please select an event type" })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select Event Type</option>
                  <option value="wedding">Wedding Photography</option>
                  <option value="preWedding">Pre-Wedding Shoot</option>
                  <option value="babyShower">Baby Shower</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="birthday">Birthday Celebration</option>
                  <option value="other">Other</option>
                </select>
                {errors.eventType && (
                  <span className="text-red-500 text-sm mt-1">{errors.eventType.message as string}</span>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Event Date
                </label>
                <input
                  type="date"
                  {...register("eventDate", { required: "Event date is required" })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                {errors.eventDate && (
                  <span className="text-red-500 text-sm mt-1">{errors.eventDate.message as string}</span>
                )}
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Event Location
              </label>
              <input
                type="text"
                {...register("location", { required: "Location is required" })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="City, State or Venue Name"
              />
              {errors.location && (
                <span className="text-red-500 text-sm mt-1">{errors.location.message as string}</span>
              )}
            </div>
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Expected Number of Guests
              </label>
              <input
                type="number"
                {...register("guestCount", { 
                  required: "Number of guests is required",
                  min: { value: 1, message: "Must be at least 1 guest" }
                })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              {errors.guestCount && (
                <span className="text-red-500 text-sm mt-1">{errors.guestCount.message as string}</span>
              )}
            </div>
          </div>

          {/* Additional Requirements */}
          <div className="bg-white dark:bg-secondary p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Additional Information</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Special Requirements or Preferences
              </label>
              <textarea
                {...register("requirements")}
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Tell us about any specific requirements, style preferences, or special moments you'd like us to capture..."
              />
            </div>
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Budget Range
              </label>
              <select
                {...register("budget")}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">Select Budget Range</option>
                <option value="under-50k">Under ₹50,000</option>
                <option value="50k-1l">₹50,000 - ₹1,00,000</option>
                <option value="1l-2l">₹1,00,000 - ₹2,00,000</option>
                <option value="2l-5l">₹2,00,000 - ₹5,00,000</option>
                <option value="above-5l">Above ₹5,00,000</option>
              </select>
            </div>
          </div>

          <motion.button
            type="submit"
            className="w-full bg-primary text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-primary-light transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={submitStatus === 'success'}
          >
            Request Custom Quote
          </motion.button>
        </motion.form>

        {/* Additional Information */}
        <motion.div 
          className="mt-12 text-center text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p>We typically respond within 24 hours with a detailed custom quote.</p>
          <p className="mt-2">
            For immediate assistance, call us at{' '}
            <a href="tel:+919979892647" className="text-primary hover:text-primary-light">
              +91 99798 92647
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default CustomQuotes;