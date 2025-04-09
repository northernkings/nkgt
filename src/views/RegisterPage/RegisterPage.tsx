import type React from 'react';
import { useState } from 'react';
import { Button } from '../../components/Button';
import { EditorialSection } from '../../components/EditorialSection';
import { Separator } from '../../components/Separator';
import type { FormData, RegisterPageProps } from './RegisterPage.types';
import './RegisterPage.css';
import { config } from '../../config';

export const RegisterPage: React.FC<RegisterPageProps> = ({ step = 1 }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    team: '',
    assignTeam: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Store form data in localStorage to persist it between steps
    localStorage.setItem('registrationData', JSON.stringify(formData));

    // Submit to Netlify Forms
    try {
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);

      await fetch('/', {
        method: 'POST',
        body: formData,
      });

      // Navigate to step 2 after successful form submission
      window.location.href = '/register-step-2/';
    } catch (error) {
      console.error('Error submitting form:', error);
      // Still navigate to step 2 even if form submission fails
      window.location.href = '/register-step-2/';
    }
  };

  return (
    <>
      {config.soldOut ? (
        <EditorialSection
          title="Registration"
          variants={['single']}
        >
          <p>
            Sorry, the event has now sold out. Please email northernkings.kow@gmail.com to be added
            to the reserve list.
          </p>
        </EditorialSection>
      ) : (
        <>
          {step === 1 && (
            <EditorialSection
              title="Step 1: Attendee Details"
              variants={['single']}
              titleAs="h1"
            >
              <p>Registration is split into two steps 1) Attendee Details 2) Payment.</p>
              <p>
                If you're planning on registering for multiple attendees, please complete a
                registration for each player individually.
              </p>
              <p>
                Tickets are priced at <strong>&pound;60</strong>, include a proper lunch on both
                days and a planned evening social.
              </p>
              <Separator compact={true} />
              <form
                onSubmit={handleSubmit}
                name="nkgtRegistration2025"
                method="POST"
                data-netlify="true"
                className="c-form"
              >
                <div className="u-hidden">
                  <label htmlFor="bot-field">Ignore this field if you are human</label>
                  <input
                    id="bot-field"
                    name="bot-field"
                  />
                  <input
                    type="hidden"
                    name="subject"
                    value="Northern Kings GT 2025 - Registration"
                  />
                  <input
                    type="hidden"
                    name="form-name"
                    value="nkgtRegistration2025"
                  />
                </div>

                <div className="c-form__group">
                  <label htmlFor="name">Attendee's Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="e.g. Ronnie Renton"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="c-form__group">
                  <label htmlFor="email">Contact Email</label>
                  <p>
                    <small>
                      Note: we will only use your email address to communicate with you about about
                      the event.
                    </small>
                  </p>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="e.g. ronnie@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="c-form__group">
                  <label htmlFor="team">Team Name (Optional)</label>
                  <p>
                    <small>
                      Note: We will endevour to keep teams apart for game one, but we cannot
                      guarantee this.
                    </small>
                  </p>
                  <input
                    id="team"
                    name="team"
                    type="text"
                    placeholder="e.g. Moonrakers"
                    value={formData.team}
                    onChange={handleInputChange}
                  />
                </div>

                {formData.team.length < 1 && (
                  <div className="c-form__group c-form__group--inline">
                    <input
                      id="assignTeam"
                      name="assignTeam"
                      type="checkbox"
                      value="Yes please"
                      checked={formData.assignTeam}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="assignTeam">
                      I don't have a team, please assign me to one (if possible)
                    </label>
                  </div>
                )}

                <div
                  className="c-form__group"
                  data-netlify-recaptcha="true"
                />

                <Button
                  type="submit"
                  variants={['decorative', 'invert']}
                >
                  Submit and Continue to Payment (&pound;60)
                </Button>
              </form>
            </EditorialSection>
          )}

          {step === 2 && (
            <EditorialSection
              title="Step 2: Payment"
              variants={['single']}
              titleAs="h1"
            >
              <p>
                Thank you for submitting your attendee details, to complete the registration we
                require payment. The below button will redirect you to PayPal.
              </p>
              <p>
                Due to the fact not all people use the same name and email for their PayPal account,
                when paying, it is important that you also{' '}
                <strong>enter the attendee's full name into the notes field</strong> for us to
                correctly match your payment to your registration name.
              </p>
              <Button
                className="c-header__book-now__action"
                href="https://www.paypal.com/paypalme/northernkings/60"
                variants={['invert', 'decorative', 'lg']}
              >
                Complete Registration with PayPal
              </Button>
              <p>
                <small>
                  Note: Any registration without a matching payment will be disregarded.
                </small>
              </p>
            </EditorialSection>
          )}
        </>
      )}
    </>
  );
};

export default RegisterPage;
