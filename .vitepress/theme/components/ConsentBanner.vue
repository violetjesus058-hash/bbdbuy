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
}

function denyConsent() {
  localStorage.setItem('consentGranted', 'false')
  consentGiven.value = true
  updateConsent('denied')
}

function updateConsent(status) {
  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      'ad_user_data': status,
      'ad_personalization': status,
      'ad_storage': status,
      'analytics_storage': status
    })
  }
}

</script>

<style scoped>
.consent-overlay {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  padding: 0;
  background: transparent;
  pointer-events: none;
}

.consent-banner {
  max-width: none;
  margin: 0;
  padding: 12px 24px;
  background: #181818;
  border: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 0;
  box-shadow: 0 -10px 26px rgba(0, 0, 0, 0.20);
  color: #fff;
  text-align: center;
  pointer-events: auto;
}

.consent-icon {
  display: none;
}

.consent-title {
  font-size: 15px;
  font-weight: 750;
  color: #fff;
  margin: 0 0 7px;
}

.consent-text {
  max-width: 620px;
  margin: 0 auto 14px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 13px;
  line-height: 1.55;
}

.consent-buttons {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 10px;
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
  border: 1px solid rgba(255, 255, 255, 0.22);
  background: #2b2b2b;
  color: rgba(255, 255, 255, 0.88);
}

.consent-accept {
  background: #5b5ce2;
  color: #fff;
}

.consent-privacy {
  margin: 0;
  color: rgba(255, 255, 255, 0.48);
  font-size: 11px;
}

.consent-privacy a {
  color: #b6b6ff;
  text-decoration: none;
}

.consent-privacy a:hover {
  text-decoration: underline;
}

@media (min-width: 701px) {
  .consent-banner {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    align-items: center;
    gap: 18px;
  }
  .consent-title, .consent-text, .consent-buttons { margin: 0; }
  .consent-text { max-width: none; text-align: left; }
  .consent-privacy { display: none; }
}

@media (max-width: 700px) {
  .consent-overlay { padding: 0; }
  .consent-banner {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: center;
    gap: 10px;
    border-radius: 0;
    padding: 10px 12px;
  }
  .consent-title, .consent-privacy { display: none; }
  .consent-text {
    max-width: none;
    margin: 0;
    color: rgba(255, 255, 255, 0.68);
    font-size: 0;
    line-height: 1.35;
    text-align: left;
  }
  .consent-text::after {
    content: 'We use cookies. Choose an option to continue.';
    font-size: 11px;
  }
  .consent-buttons {
    flex-direction: row;
    gap: 6px;
    margin: 0;
  }
  .consent-btn {
    width: auto;
    padding: 8px 10px;
    font-size: 12px;
    white-space: nowrap;
  }
}
</style>
