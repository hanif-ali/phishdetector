import React from 'react';

interface IProps {
  dismiss: () => void;
}

const Alert: React.FC<IProps> = ({ dismiss }) => {
  return (
    <div className="container-pd">
      <div className="container2-pd">
        <div className="card-pd">
          <div className="flex-center-pd">
            <div className="inner-pd">
              <svg
                class="svg-icon-pd"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z" />
              </svg>
            </div>
            <h2 class="heading-pd">Phishing Site Detected!</h2>
            <p class="description-pd">
              This site is known to be a phishing site. Please do not enter any
              of your personal information. If you still want to visit the site,
              click on the button below.
            </p>
          </div>
          <div class="actions-pd">
            {/* <button class="cancelBtn-pd">Cancel</button> */}
            <button onClick={dismiss} class="primaryBtn-pd">
              Visit the site
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;