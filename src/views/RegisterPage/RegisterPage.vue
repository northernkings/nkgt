<script lang="ts" setup>
import EditorialSection from "~/components/EditorialSection";
import VButton from "~/components/VButton";
import LayoutBase from "~/layouts/LayoutBase";
import Separator from "~/components/Separator";

defineProps({
  step: Number,
});
</script>

<template>
  <LayoutBase :compact-header="true">
    <EditorialSection
      title="Step 1: Attendee Details"
      :variants="['single']"
      title-as="h1"
      v-if="step === 1"
    >
      <p>Registration is split into two steps 1) Attendee Details 2) Payment.</p>
      <p>
        If you're planning on registering for multiple attendees, please complete a registration for
        each player individually.
      </p>
      <p>
        Tickets are priced at <strong>&pound;55</strong>, include a proper lunch on both days and a planned evening
        social.
      </p>
      <Separator :compact="true" />
      <form
        action="/register-step-2/"
        name="nkgtRegistration2023"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify-recaptcha="true"
        data-netlify="true"
        class="c-form"
      >
        <div class="u-hidden">
          <label for="bot-field">Ignore this field if you are human</label>
          <input id="bot-field" name="bot-field" />
          <input type="hidden" name="subject" value="Northern Kings GT 2023 - Registration" />
          <input type="hidden" name="form-name" value="nkgtRegistration2023" />
        </div>

        <div class="c-form__group">
          <label for="name">Attendee's Full Name</label>
          <input id="name" name="name" type="text" required placeholder="e.g. Ronnie Renton" />
        </div>

        <div class="c-form__group">
          <label for="email">Contact Email</label>
          <p>
            <small>
              Note: we will only use your email address to communicate with you about about the
              event.
            </small>
          </p>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="e.g. ronnie@example.com"
          />
        </div>

        <div class="c-form__group" data-netlify-recaptcha="true"></div>

        <VButton type="submit" :variants="['decorative', 'invert']">
          Submit and Continue to Payment (&pound;55)
        </VButton>
      </form>
    </EditorialSection>
    <EditorialSection
      title="Step 2: Payment"
      :variants="['single']"
      title-as="h1"
      v-if="step === 2"
    >
      <p>
        Thank you for submitting your attendee details, to complete the registration we require
        payment. The below button will redirect you to PayPal.
      </p>
      <p>
        Due to the fact not all people use the same name and email for their PayPal account, when
        paying, it is important that you also
        <strong>enter the attendee's full name into the notes field</strong> for us to correctly
        match your payment to your registration name.
      </p>
      <VButton
        class="c-header__book-now__action"
        href="https://www.paypal.com/paypalme/northernkings/55"
        :variants="['invert', 'decorative', 'lg']"
      >
        Complete Registration with PayPal
      </VButton>
      <p><small>Note: Any registration without a matching payment will be disregarded.</small></p>
    </EditorialSection>
  </LayoutBase>
</template>

<style>
@import "~/assets/styles/resources.css";

label {
  display: block;
}

small {
  display: block;
  line-height: 1.2;
  margin-top: var(--space-x-1);
}

input[type="text"],
input[type="email"] {
  width: 100%;
  margin-top: var(--space-x-2);
  padding: var(--space-y-3) var(--space-x-3);
  border-radius: 0;
  border: 2px solid var(--color-brand-fuscous);
}

.c-form__group {
  margin-bottom: var(--space-x-6);
}
</style>
