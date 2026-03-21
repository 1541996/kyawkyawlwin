// DentalWare.js
import React, { useEffect } from 'react';
import Header3 from '../components/layouts/Header3';
import Footer from '../components/layouts/Footer';
import publicUrl from '../utils/publicUrl';

const DentalWare = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Header3 />
    <div className="dentalware-container" style={{ paddingTop: "80px" }}>
      <div className="dentalware-content">
        {/* Left Content */}
        <div className="left-content">
          {/* Header Section */}
          <header className="dentalware-header">
            <h1>DentalWare – My Work & Contributions</h1>
            <p className="subtitle">
               I am currently working as a software developer in a remote full-time with <a href='https://intica.com/' target='_blank' rel='noreferrer'>INTICA Ltd.</a> , where I contribute to the development of DentalWare — a comprehensive dental practice management system designed for general practitioners. It offers key features such as appointment scheduling, billing, electronic claims, patient recall, clinical documentation, and practice analytics. Below are some screenshots showcasing my current work and contributions to DentalWare.
            </p>
           
          </header>

         
        </div>

        {/* Right Image */}
        <div className="right-content" style={{
                width: "500px"
            }}>
          <div className="image-placeholder">
            <img 
              src={publicUrl + "/images/dw/dwlogin.png"}
              alt="DentalWare software interface" 
              className="software-image"
            />
           
          </div>
        </div>
      </div>

       <div className="divider"></div>
       <div className="dentalware-content">
        {/* Left Content */}
        <div className="left-content">
          
          {/* Appointment Scheduler Section */}
          <div className="feature-section dentalware-header">
            <h1>Appointment Scheduler</h1>
            <div className="feature-grid">
              <div className="feature-item">
                <span className="feature-bullet">•</span>
                Support unlimited number of practitioners.
              </div>
              <div className="feature-item">
                <span className="feature-bullet">•</span>
                Book appointments with different patients simultaneously. Great for offices with multiple computers.
              </div>
              <div className="feature-item">
                <span className="feature-bullet">•</span>
                Quick navigation - shortcuts to go to different days and next recall date. DentalWare will even pick the next available time slot for you!
              </div>
              <div className="feature-item">
                <span className="feature-bullet">•</span>
                Fully customizable - view appointments by day, by week, by one practitioner or all practitioners, set colors for different procedure types and confirmation status.
              </div>
            </div>
          
          </div>

         
        </div>

        {/* Right Image */}
        <div className="right-content">
          <div className="image-placeholder">
            <img 
              src={publicUrl + "/images/dw/dwappointment.png"}
              alt="DentalWare software interface" 
              className="software-image"
            />
           
          </div>
        </div>
      </div>

      <div className="divider"></div>
       <div className="dentalware-content">
        {/* Left Content */}
        <div className="left-content">
          
          {/* Appointment Scheduler Section */}
          <div className="feature-section dentalware-header">
            <h1>Patient Records</h1>
            <div className="feature-grid">
              <div className="feature-item">
                <span className="feature-bullet">•</span>
                Accessibility - access patient files from any computers.
              </div>
              <div className="feature-item">
                <span className="feature-bullet">•</span>
               Keep track of patient demographics, insurance coverage, recalls, medical/dental history, clinical notes, billing history and other family members all in one place.
              </div>
              <div className="feature-item">
                <span className="feature-bullet">•</span>
               Account summary - individual patient balance and total account balance all at a glance.
              </div>
              <div className="feature-item">
                <span className="feature-bullet">•</span>
               Appointment statistics at a glance.
              </div>
              <div className="feature-item">
                <span className="feature-bullet">•</span>
                Security - patient records are permanent records, with automatic date and time stamp.
              </div>
            </div>
          
          </div>

         
        </div>

        {/* Right Image */}
        <div className="right-content">
          <div className="image-placeholder">
            <img 
              src={publicUrl + "/images/dw/dwpatient.png"}
              alt="DentalWare software interface" 
              className="software-image"
            />
           
          </div>
        </div>
      </div>

       <div className="divider"></div>
       <div className="dentalware-content">
        {/* Left Content */}
        <div className="left-content">
          
          {/* Appointment Scheduler Section */}
          <div className="feature-section dentalware-header">
            <h1>To Do List</h1>
            <div className="feature-grid">
              <div className="feature-item">
                <span className="feature-bullet">•</span>
                 Organize to do tasks by staff member, with start date and due date.
              </div>
              <div className="feature-item">
                <span className="feature-bullet">•</span>             
                  Track progress of to do tasks.
              </div>
              
            </div>
          
          </div>

         
        </div>

        {/* Right Image */}
        <div className="right-content">
          <div className="image-placeholder">
            <img 
              src={publicUrl + "/images/dw/dwtodo.png"}
              alt="DentalWare software interface" 
              className="software-image"
            />
           
          </div>
        </div>
      </div>

       <div className="divider"></div>
       <div className="dentalware-content">
        {/* Left Content */}
        <div className="left-content">
          
          {/* Appointment Scheduler Section */}
          <div className="feature-section dentalware-header">
            <h1>Security</h1>
            <div className="feature-grid">
              <div className="feature-item">
                <span className="feature-bullet">•</span>
                Personalized user login for each staff member.
              </div>
              <div className="feature-item">
                <span className="feature-bullet">•</span>             
                 Multi-level access control for each staff member.
              </div>

              <div className="feature-item">
                <span className="feature-bullet">•</span>             
                Audit trail for addition/changes of important data, especially billing activities.
              </div>

              <div className="feature-item">
                <span className="feature-bullet">•</span>             
                Secured and permanent patient and billing records.
              </div>
              
            </div>
          
          </div>

         
        </div>

        {/* Right Image */}
        <div className="right-content">
          <div className="image-placeholder">
            <img 
              src={publicUrl + "/images/dw/dwusers.png"}
              alt="DentalWare software interface" 
              className="software-image"
            />
           
          </div>
        </div>
      </div>

      <div className="divider"></div>
       <div className="dentalware-content">
        {/* Left Content */}
        <div className="left-content">
          
          {/* Appointment Scheduler Section */}
          <div className="feature-section dentalware-header">
            <h1>Initial Contact/Pending Appointment</h1>
            <div className="feature-grid">
              <div className="feature-item">
                <span className="feature-bullet">•</span>
                 Manage initial contact
              </div>
              <div className="feature-item">
                <span className="feature-bullet">•</span>             
                 Manage pending appointments
              </div>

             
              
            </div>
          
          </div>

         
        </div>

        {/* Right Image */}
        <div className="right-content">
          <div className="image-placeholder">
            <img 
              src={publicUrl + "/images/dw/dwinitailcontact.png"}
              alt="DentalWare software interface" 
              className="software-image"
            />
           
          </div>
        </div>
      </div>

      <div className="divider"></div>
       <div className="dentalware-content">
        {/* Left Content */}
        <div className="left-content">
          
          {/* Appointment Scheduler Section */}
          <div className="feature-section dentalware-header">
            <h1>Medical History</h1>
            <div className="feature-grid">
                <div className="feature-item">
                <span className="feature-bullet">•</span>
                Manage patient medical history with detailed records of past and current health conditions.
                </div>
                <div className="feature-item">
                <span className="feature-bullet">•</span>
                Manage patient prescriptions, including dosage, frequency, and refill history.
                </div>
                <div className="feature-item">
                <span className="feature-bullet">•</span>
                Record allergies, medications, and medical alerts to ensure safe and effective treatment.
                </div>
                <div className="feature-item">
                <span className="feature-bullet">•</span>
                Track previous dental treatments and procedures for a complete patient profile.
                </div>
                
                
            </div>
            </div>

         
        </div>

        {/* Right Image */}
        <div className="right-content">
          <div className="image-placeholder">
            <img 
              src={publicUrl + "/images/dw/dwmedicalhistory.png"}
              alt="DentalWare software interface" 
              className="software-image"
            />
           
          </div>
        </div>
      </div>


      <div className="divider"></div>
       <div className="dentalware-content">
        {/* Left Content */}
        <div className="left-content">
          
          {/* Appointment Scheduler Section */}
          <div className="feature-section dentalware-header">
            <h1>Pending treatments</h1>
            <div className="feature-grid">
                <div className="feature-item">
                    <span className="feature-bullet">•</span>
                    View all scheduled and planned dental procedures that have not yet been completed.
                </div>
                <div className="feature-item">
                    <span className="feature-bullet">•</span>
                    Prioritize urgent care needs with a clear overview of outstanding treatment plans.
                </div>
                <div className="feature-item">
                    <span className="feature-bullet">•</span>
                    Track the status of ongoing treatments, from initial consultation to final procedure.
                </div>
                <div className="feature-item">
                    <span className="feature-bullet">•</span>
                    Quickly access clinical notes and requirements for each pending case before the patient arrives.
                </div>
            </div>
          </div>

         
        </div>

        {/* Right Image */}
        <div className="right-content">
          <div className="image-placeholder">
            <img 
              src={publicUrl + "/images/dw/pendingtr.png"}
              alt="DentalWare software interface" 
              className="software-image"
            />
           
          </div>
        </div>
      </div>


      <div className="divider"></div>
       <div className="dentalware-content">
        {/* Left Content */}
        <div className="left-content">
          
          {/* Appointment Scheduler Section */}
          <div className="feature-section dentalware-header">
           <h1>Add/Edit Treatments</h1>
            <div className="feature-grid">
                <div className="feature-item">
                    <span className="feature-bullet">•</span>
                    Create comprehensive treatment plans with detailed descriptions, fees, and timelines.
                </div>
                <div className="feature-item">
                    <span className="feature-bullet">•</span>
                    Update procedure statuses easily, from "planned" and "in progress" to "completed."
                </div>
                <div className="feature-item">
                    <span className="feature-bullet">•</span>
                    Attach clinical notes, diagrams, or images to specific treatments for accurate records.
                </div>
                <div className="feature-item">
                    <span className="feature-bullet">•</span>
                    Modify existing treatment entries to reflect changes in patient needs or treatment plans.
                </div>
            </div>
        </div>

         
        </div>

        {/* Right Image */}
        <div className="right-content">
          <div className="image-placeholder">
            <img 
              src={publicUrl + "/images/dw/addtr.png"}
              alt="DentalWare software interface" 
              className="software-image"
            />
           
          </div>
        </div>
      </div>


      <div className="divider"></div>
       <div className="dentalware-content">
        {/* Left Content */}
        <div className="left-content">
          
          {/* Appointment Scheduler Section */}
          <div className="feature-section dentalware-header">
            <h1>Manage Patient's Booking List</h1>
            <div className="feature-grid">
                <div className="feature-item">
                    <span className="feature-bullet">•</span>
                    View all patient appointments at a glance, including date, time, provider, and procedure details.
                </div>
                <div className="feature-item">
                    <span className="feature-bullet">•</span>
                    Track appointment statuses with real-time counts for Arrived, Cancelled, No Show, and Pending.
                </div>
                <div className="feature-item">
                    <span className="feature-bullet">•</span>
                    Manage pending appointments and recalls with preferred provider and hygienist assignments.
                </div>
                <div className="feature-item">
                    <span className="feature-bullet">•</span>
                    Monitor referral sources and notes to maintain comprehensive patient communication records.
                </div>
            </div>
         </div>

         
        </div>

        {/* Right Image */}
        <div className="right-content">
          <div className="image-placeholder">
            <img 
              src={publicUrl + "/images/dw/bookinglist.png"}
              alt="DentalWare software interface" 
              className="software-image"
            />
           
          </div>
        </div>
      </div>


      <div className="divider"></div>
       <div className="dentalware-content">
        {/* Left Content */}
        <div className="left-content">
          
          {/* Appointment Scheduler Section */}
          <div className="feature-section dentalware-header">
            <h1>Recall</h1>
            <div className="feature-grid">
                <div className="feature-item">
                    <span className="feature-bullet">•</span>
                    Boost recall revenue - comprehensive tracking of booked and missed recalls.
                </div>
                <div className="feature-item">
                    <span className="feature-bullet">•</span>
                    Generate patient recall list for any period of time.
                </div>
                <div className="feature-item">
                    <span className="feature-bullet">•</span>
                   Contact recall patients by phone, emails, letters or post cards.
                </div>
                <div className="feature-item">
                    <span className="feature-bullet">•</span>
                    View recall information for multiple family members all on one screen.
                </div>
                  <div className="feature-item">
                    <span className="feature-bullet">•</span>
                     One-click recall booking - simply drag patient from recall list directly to appointment scheduler.
                </div>
                  <div className="feature-item">
                    <span className="feature-bullet">•</span>
                    Track staff performance - recall appointment statistics booked by different staff member.
                </div>
            </div>
         </div>

         
        </div>

        {/* Right Image */}
        <div className="right-content">
          <div className="image-placeholder">
            <img 
              src={publicUrl + "/images/dw/recall.png"}
              alt="DentalWare software interface" 
              className="software-image"
            />
           
          </div>
        </div>
      </div>


      <div className="divider"></div>
       <div className="dentalware-content">
        {/* Left Content */}
        <div className="left-content">
          
          {/* Appointment Scheduler Section */}
          <div className="feature-section dentalware-header">
            <h1>Fee Guide</h1>
            <div className="feature-grid">
                <div className="feature-item">
                    <span className="feature-bullet">•</span>
                   Accurate billing - procedure fees are always accurate.
                </div>
                <div className="feature-item">
                    <span className="feature-bullet">•</span>
                   Quick look up of procedure codes and fees.
                </div>
                <div className="feature-item">
                    <span className="feature-bullet">•</span>
                   Always up to date - constant and timely update of provincial and government fee schedules.
                </div>
                <div className="feature-item">
                    <span className="feature-bullet">•</span>
                    Flexibility - create your own fee guides, with custom procedure codes and fees.
                </div>
                  
            </div>
         </div>

         
        </div>

        {/* Right Image */}
        <div className="right-content">
          <div className="image-placeholder">
            <img 
              src={publicUrl + "/images/dw/feeguide.png"}
              alt="DentalWare software interface" 
              className="software-image"
            />
           
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default DentalWare;