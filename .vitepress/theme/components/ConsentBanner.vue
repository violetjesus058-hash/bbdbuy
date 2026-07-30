<template>
  <div v-if="!consentGiven" class="consent-overlay" id="consent-banner">
    <div class="consent-banner">
      <div class="consent-icon">&#128274;</div>
      <h3 class="consent-title">Cookie Consent</h3>
      <p class="consent-text">
        We use cookies and analytics to improve your experience. By clicking "Accept", you consent to the use of cookies for analytics and advertising purposes. You can manage your preferences at any time.
      </p>
      <div class="consent-buttons">
        <button class="consent-btn consent-deny" @click="denyConsent">Decline</button>
        <button class="consent-btn consent-accept" @click="grantConsent">Accept All</button>
      </div>
      <p class="consent-privacy">
        <a href="/privacy-policy/">Privacy Policy</a>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const consentGiven = ref(false)

onMounted(() => {
  const saved = localStorage.getItem('consentGranted')
  if (saved === 'true' || saved === 'false') {
    consentGiven.value = true
    if (saved === 'true') {
      updateConsent('granted')
    }
  }
})

function grantConsent() {
  localStorage.setItem('consentGranted', 'true')
  consentGiven.value = true
  updateConsent('granted')
  loadGtagScripts()
}

function denyConsent() {
  localStorage.setItem('consentGranted', 'false')
  consentGiven.value = true
  updateConsent('denied')
}

function updateConsent(status) {
  if (typeof gtag === 'function') {
    gtag('consent', 'update', {
      'ad_user_data': status,
      'ad_personalization': status,
      'ad_storage': status,
      'analytics_storage': status
    })
  }
}

function loadGtagScripts() {
  const ga4 = 'G-TK58Z0WW8'
  const aw = 'AW-18355431983'

  var s1 = document.createElement('script')
  s1.async = true
  s1.src = 'https://www.googletagmanager.com/gtag/js?id=' + ga4
  document.head.appendChild(s1)

  var s2 = document.createElement('script')
  s2.async = true
  s2.src = 'https://www.googletagmanager.com/gtag/js?id=' + aw
  document.head.appendChild(s2)
}
</script>

<style scoped>
.consent-overlay {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  padding: 16px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
}

.consent-banner {
  max-width: 640px;
  margin: 0 auto;
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  text-align: center;
}

.consent-icon {
  font-size: 32px;
  margin-bottom: 8px;
}

.consent-title {
  font-size: 18px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 8px;
}

.consent-text {
  font-size: 14px;
  color: #555;
  line-height: 1.5;
  margin: 0 0 20px;
}

.consent-buttons {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-bottom: 12px;
}

.consent-btn {
  padding: 10px 28px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: opacity 0.2s;
}

.consent-btn:hover {
  opacity: 0.85;
}

.consent-deny {
  background: #f0f0f0;
  color: #333;
}

.consent-accept {
  background: #8B0000;
  color: #fff;
}

.consent-privacy {
  font-size: 12px;
  color: #999;
  margin: 0;
}

.consent-privacy a {
  color: #8B0000;
  text-decoration: none;
}

.consent-privacy a:hover {
  text-decoration: underline;
}

@media (max-width: 480px) {
  .consent-banner {
    padding: 20px 16px;
  }
  .consent-buttons {
    flex-direction: column;
  }
  .consent-btn {
    width: 100%;
  }
}
</style>
