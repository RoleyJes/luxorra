<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="bg-linear-to-br from-gray-50 to-white py-16 md:py-24">
      <div class="mx-auto max-w-container px-4">
        <div class="animate-fade-in text-center">
          <h1
            class="animate-slide-up mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl"
          >
            Contact Us
          </h1>
          <p
            class="animate-slide-up animation-delay-200 mx-auto max-w-2xl text-lg text-gray-600 md:text-xl"
          >
            We'd love to hear from you. Get in touch with our team for any questions, feedback, or
            support.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Info & Form Section -->
    <section class="py-16 md:py-24">
      <div class="mx-auto max-w-container px-4">
        <div class="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <!-- Contact Information -->
          <div class="animate-slide-in-left space-y-8">
            <div>
              <h2 class="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">Get in Touch</h2>
              <p class="text-gray-600">
                Have a question about our products, need help with an order, or just want to say
                hello? We're here to help!
              </p>
            </div>

            <!-- Contact Methods -->
            <div class="space-y-6">
              <!-- Phone -->
              <div class="animate-fade-in animation-delay-300 flex items-start gap-4">
                <div
                  class="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 transition-transform duration-300 hover:scale-110"
                >
                  <Icon icon="solar:phone-bold" class="text-xl text-blue-600" />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Phone</h3>
                  <p class="text-gray-600">(+00) 123 567990</p>
                  <p class="text-sm text-gray-500">Mon-Fri 9AM-6PM EST</p>
                </div>
              </div>

              <!-- Email -->
              <div class="animate-fade-in animation-delay-500 flex items-start gap-4">
                <div
                  class="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 transition-transform duration-300 hover:scale-110"
                >
                  <Icon icon="solar:letter-bold" class="text-xl text-green-600" />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Email</h3>
                  <p class="text-gray-600">contact@luxorra.com</p>
                  <p class="text-sm text-gray-500">We'll respond within 24 hours</p>
                </div>
              </div>

              <!-- Address -->
              <div class="animate-fade-in animation-delay-700 flex items-start gap-4">
                <div
                  class="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 transition-transform duration-300 hover:scale-110"
                >
                  <Icon icon="solar:map-point-bold" class="text-xl text-purple-600" />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Address</h3>
                  <p class="text-gray-600">
                    123 Fashion Street<br />
                    New York, NY 10001<br />
                    United States
                  </p>
                </div>
              </div>

              <!-- Business Hours -->
              <div class="animate-fade-in animation-delay-900 flex items-start gap-4">
                <div
                  class="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 transition-transform duration-300 hover:scale-110"
                >
                  <Icon icon="solar:clock-circle-bold" class="text-xl text-orange-600" />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Business Hours</h3>
                  <div class="text-gray-600">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Social Media -->
            <div class="animate-fade-in animation-delay-1100">
              <h3 class="mb-4 font-semibold text-gray-900">Follow Us</h3>
              <div class="flex gap-4">
                <a
                  href="#"
                  class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition-all duration-300 hover:scale-110 hover:bg-gray-200"
                >
                  <Icon icon="solar:instagram-bold" class="text-lg text-gray-600" />
                </a>
                <a
                  href="#"
                  class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition-all duration-300 hover:scale-110 hover:bg-gray-200"
                >
                  <Icon icon="solar:facebook-bold" class="text-lg text-gray-600" />
                </a>
                <a
                  href="#"
                  class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition-all duration-300 hover:scale-110 hover:bg-gray-200"
                >
                  <Icon icon="solar:twitter-bold" class="text-lg text-gray-600" />
                </a>
                <a
                  href="#"
                  class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition-all duration-300 hover:scale-110 hover:bg-gray-200"
                >
                  <Icon icon="solar:linkedin-bold" class="text-lg text-gray-600" />
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="animate-slide-in-right rounded-lg bg-gray-50 p-8 md:p-10">
            <h3 class="mb-6 text-2xl font-bold text-gray-900">Send us a Message</h3>

            <form @submit.prevent="handleSubmit" class="space-y-6">
              <!-- Name -->
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  placeholder="Your full name"
                />
              </div>

              <!-- Email -->
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700"
                  >Email Address</label
                >
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <!-- Subject -->
              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700">Subject</label>
                <select
                  id="subject"
                  v-model="form.subject"
                  required
                  class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="">Select a subject</option>
                  <option value="order">Order Inquiry</option>
                  <option value="product">Product Question</option>
                  <option value="return">Returns & Exchanges</option>
                  <option value="support">Technical Support</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <!-- Message -->
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="5"
                  class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full rounded-md bg-black px-4 py-3 text-white transition-colors hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {{ isSubmitting ? "Sending..." : "Send Message" }}
              </button>
            </form>

            <!-- Success Message -->
            <div v-if="isSubmitted" class="mt-6 rounded-md bg-green-50 p-4">
              <div class="flex">
                <Icon icon="solar:check-circle-bold" class="text-green-400" />
                <div class="ml-3">
                  <p class="text-sm font-medium text-green-800">Message sent successfully!</p>
                  <p class="text-sm text-green-700">We'll get back to you within 24 hours.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="bg-gray-50 py-16 md:py-24">
      <div class="mx-auto max-w-container px-4">
        <div class="animate-fade-in mb-12 text-center">
          <h2 class="text-3xl font-bold text-gray-900 md:text-4xl">Frequently Asked Questions</h2>
          <p class="mt-4 text-lg text-gray-600">Quick answers to common questions</p>
        </div>

        <div class="mx-auto max-w-3xl space-y-4">
          <details
            class="animate-fade-in animation-delay-200 rounded-lg bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
          >
            <summary class="cursor-pointer font-semibold text-gray-900">
              How long does shipping take?
            </summary>
            <p class="mt-3 text-gray-600">
              Standard shipping takes 3-5 business days. Express shipping is available for 1-2
              business days delivery.
            </p>
          </details>

          <details
            class="animate-fade-in animation-delay-400 rounded-lg bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
          >
            <summary class="cursor-pointer font-semibold text-gray-900">
              What is your return policy?
            </summary>
            <p class="mt-3 text-gray-600">
              We offer a 30-day return policy for unused items in original packaging. Returns are
              free for defective items.
            </p>
          </details>

          <details
            class="animate-fade-in animation-delay-600 rounded-lg bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
          >
            <summary class="cursor-pointer font-semibold text-gray-900">
              Do you offer international shipping?
            </summary>
            <p class="mt-3 text-gray-600">
              Yes, we ship to most countries worldwide. International shipping rates and delivery
              times vary by location.
            </p>
          </details>

          <details
            class="animate-fade-in animation-delay-800 rounded-lg bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
          >
            <summary class="cursor-pointer font-semibold text-gray-900">
              How can I track my order?
            </summary>
            <p class="mt-3 text-gray-600">
              Once your order ships, you'll receive a tracking number via email. You can also check
              your order status in your account.
            </p>
          </details>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import toast from "vue3-hot-toast";

const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const isSubmitting = ref(false);
const isSubmitted = ref(false);

const handleSubmit = async () => {
  isSubmitting.value = true;

  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast.success("Message sent successfully! We'll get back to you soon.");
    isSubmitted.value = true;

    // Reset form
    form.value = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  } catch {
    toast.error("Failed to send message. Please try again.");
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
/* Animation classes */
.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
  opacity: 0;
}

.animate-slide-up {
  animation: slideUp 0.8s ease-out forwards;
  opacity: 0;
  transform: translateY(30px);
}

.animate-slide-in-left {
  animation: slideInLeft 0.8s ease-out forwards;
  opacity: 0;
  transform: translateX(-50px);
}

.animate-slide-in-right {
  animation: slideInRight 0.8s ease-out forwards;
  opacity: 0;
  transform: translateX(50px);
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-300 {
  animation-delay: 0.3s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

.animation-delay-500 {
  animation-delay: 0.5s;
}

.animation-delay-600 {
  animation-delay: 0.6s;
}

.animation-delay-700 {
  animation-delay: 0.7s;
}

.animation-delay-800 {
  animation-delay: 0.8s;
}

.animation-delay-900 {
  animation-delay: 0.9s;
}

.animation-delay-1100 {
  animation-delay: 1.1s;
}

/* Keyframe animations */
@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
