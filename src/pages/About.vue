<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-gray-50 to-white py-16 md:py-24">
      <div class="mx-auto max-w-container px-4">
        <div class="animate-fade-in text-center">
          <h1
            class="animate-slide-up mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl"
          >
            About Luxorra
          </h1>
          <p
            class="animate-slide-up animation-delay-200 mx-auto max-w-2xl text-lg text-gray-600 md:text-xl"
          >
            Discover our story, our passion for quality fashion, and our commitment to bringing you
            the best shopping experience.
          </p>
        </div>
      </div>
    </section>

    <!-- Our Story Section -->
    <section class="py-16 md:py-24">
      <div class="mx-auto max-w-container px-4">
        <div class="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <!-- Content -->
          <div class="animate-slide-in-left space-y-6">
            <h2 class="text-3xl font-bold text-gray-900 md:text-4xl">Our Story</h2>
            <div class="space-y-4 text-gray-600">
              <p class="animate-fade-in animation-delay-300">
                Founded in 2020, Luxorra began as a vision to revolutionize online fashion shopping.
                We believe that everyone deserves access to high-quality, stylish clothing that
                makes them feel confident and comfortable.
              </p>
              <p class="animate-fade-in animation-delay-500">
                What started as a small online boutique has grown into a comprehensive fashion
                destination, offering everything from casual wear to formal attire, all carefully
                curated to meet the diverse needs of our customers.
              </p>
              <p class="animate-fade-in animation-delay-700">
                Our commitment to sustainability, ethical sourcing, and exceptional customer service
                has been the cornerstone of our growth. We work directly with manufacturers who
                share our values, ensuring that every piece in our collection meets our high
                standards for quality and craftsmanship.
              </p>
            </div>
          </div>

          <!-- Image -->
          <div class="animate-slide-in-right flex items-center justify-center">
            <div
              class="relative h-80 w-full overflow-hidden rounded-lg bg-gray-100 shadow-lg transition-transform duration-500 hover:scale-105 md:h-96"
            >
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&crop=center"
                alt="Fashion boutique interior"
                class="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="bg-gray-50 py-16 md:py-24">
      <div class="mx-auto max-w-container px-4">
        <div class="animate-fade-in mb-12 text-center">
          <h2 class="text-3xl font-bold text-gray-900 md:text-4xl">Our Values</h2>
          <p class="mt-4 text-lg text-gray-600">The principles that guide everything we do</p>
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <!-- Quality -->
          <div
            class="animate-fade-in animation-delay-200 rounded-lg bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
          >
            <div
              class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 transition-transform duration-300 hover:scale-110"
            >
              <Icon icon="solar:shield-check-bold" class="text-2xl text-blue-600" />
            </div>
            <h3 class="mb-3 text-xl font-semibold text-gray-900">Quality First</h3>
            <p class="text-gray-600">
              Every product undergoes rigorous quality checks to ensure it meets our high standards
              before reaching you.
            </p>
          </div>

          <!-- Sustainability -->
          <div
            class="animate-fade-in animation-delay-400 rounded-lg bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
          >
            <div
              class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 transition-transform duration-300 hover:scale-110"
            >
              <Icon icon="solar:leaf-bold" class="text-2xl text-green-600" />
            </div>
            <h3 class="mb-3 text-xl font-semibold text-gray-900">Sustainability</h3>
            <p class="text-gray-600">
              We're committed to eco-friendly practices and work with suppliers who share our
              environmental values.
            </p>
          </div>

          <!-- Customer Focus -->
          <div
            class="animate-fade-in animation-delay-600 rounded-lg bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
          >
            <div
              class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 transition-transform duration-300 hover:scale-110"
            >
              <Icon icon="solar:heart-bold" class="text-2xl text-purple-600" />
            </div>
            <h3 class="mb-3 text-xl font-semibold text-gray-900">Customer First</h3>
            <p class="text-gray-600">
              Your satisfaction is our priority. We provide exceptional service and support every
              step of the way.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 md:py-24">
      <div class="mx-auto max-w-container px-4">
        <div class="animate-fade-in grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div class="animate-slide-up animation-delay-200 text-center">
            <div class="text-4xl font-bold text-gray-900 md:text-5xl">50K+</div>
            <div class="mt-2 text-gray-600">Happy Customers</div>
          </div>
          <div class="animate-slide-up animation-delay-300 text-center">
            <div class="text-4xl font-bold text-gray-900 md:text-5xl">10K+</div>
            <div class="mt-2 text-gray-600">Products</div>
          </div>
          <div class="animate-slide-up animation-delay-400 text-center">
            <div class="text-4xl font-bold text-gray-900 md:text-5xl">4.8</div>
            <div class="mt-2 text-gray-600">Average Rating</div>
          </div>
          <div class="animate-slide-up animation-delay-500 text-center">
            <div class="text-4xl font-bold text-gray-900 md:text-5xl">24/7</div>
            <div class="mt-2 text-gray-600">Customer Support</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="bg-gray-50 py-16 md:py-24">
      <div class="mx-auto max-w-container px-4">
        <div class="animate-fade-in mb-12 text-center">
          <h2 class="text-3xl font-bold text-gray-900 md:text-4xl">Meet Our Team</h2>
          <p class="mt-4 text-lg text-gray-600">The passionate people behind Luxorra</p>
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <!-- Team Member 1 -->
          <div
            class="animate-fade-in animation-delay-200 rounded-lg bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
          >
            <div
              class="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full bg-gray-200 transition-transform duration-300 hover:scale-105"
            >
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
                alt="Sarah Johnson"
                class="h-full w-full object-cover"
              />
            </div>
            <h3 class="text-lg font-semibold text-gray-900">Sarah Johnson</h3>
            <p class="text-sm text-gray-600">Founder & CEO</p>
            <p class="mt-3 text-sm text-gray-500">
              Passionate about fashion and creating exceptional shopping experiences.
            </p>
          </div>

          <!-- Team Member 2 -->
          <div
            class="animate-fade-in animation-delay-400 rounded-lg bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
          >
            <div
              class="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full bg-gray-200 transition-transform duration-300 hover:scale-105"
            >
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                alt="Michael Chen"
                class="h-full w-full object-cover"
              />
            </div>
            <h3 class="text-lg font-semibold text-gray-900">Michael Chen</h3>
            <p class="text-sm text-gray-600">Head of Design</p>
            <p class="mt-3 text-sm text-gray-500">Expert in fashion trends and product curation.</p>
          </div>

          <!-- Team Member 3 -->
          <div
            class="animate-fade-in animation-delay-600 rounded-lg bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
          >
            <div
              class="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full bg-gray-200 transition-transform duration-300 hover:scale-105"
            >
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
                alt="Emma Davis"
                class="h-full w-full object-cover"
              />
            </div>
            <h3 class="text-lg font-semibold text-gray-900">Emma Davis</h3>
            <p class="text-sm text-gray-600">Customer Experience Lead</p>
            <p class="mt-3 text-sm text-gray-500">
              Dedicated to ensuring every customer has a delightful shopping journey.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 md:py-24">
      <div class="mx-auto max-w-container px-4 text-center">
        <h2 class="animate-fade-in mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
          Ready to Shop with Us?
        </h2>
        <p class="animate-fade-in animation-delay-200 mb-8 text-lg text-gray-600">
          Discover our latest collection and experience fashion like never before.
        </p>
        <RouterLink
          :to="{ name: 'collections-query', params: { collection: 'all' } }"
          class="animate-fade-in animation-delay-400 inline-flex items-center gap-2 rounded-md bg-black px-8 py-4 text-white transition-all duration-300 hover:scale-105 hover:bg-gray-800 hover:shadow-lg"
        >
          <Icon icon="solar:cart-2-bold" />
          Shop Now
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
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
