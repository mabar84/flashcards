import { SVGProps } from 'react';

import clsx from 'clsx';

import s from './Eye.module.scss';

type Props = { disabled?: boolean; show?: boolean } & SVGProps<SVGSVGElement>;

export const Eye = (props: Props) => {
  const { disabled, show, ...otherProps } = props;

  return (
    <>
      {show ? (
        <svg
          className={clsx(s.eye, disabled && s.disabled)}
          height="20"
          viewBox="0 0 20 20"
          width="15"
          xmlns="http://www.w3.org/2000/svg"
          {...otherProps}
        >
          <g clipPath="url(#clip0_5661_2350)">
            <path d="M18.225 9.58334C17.6917 8.65834 14.7583 4.01667 9.77501 4.16667C5.16667 4.28334 2.50001 8.33334 1.77501 9.58334C1.70187 9.71002 1.66336 9.85372 1.66336 10C1.66336 10.1463 1.70187 10.29 1.77501 10.4167C2.30001 11.325 5.10834 15.8333 10.0167 15.8333H10.225C14.8333 15.7167 17.5083 11.6667 18.225 10.4167C18.2981 10.29 18.3367 10.1463 18.3367 10C18.3367 9.85372 18.2981 9.71002 18.225 9.58334ZM10.1833 14.1667C6.59167 14.25 4.25001 11.175 3.51667 10C4.35001 8.65834 6.52501 5.91667 9.85834 5.83334C13.4333 5.74167 15.7833 8.82501 16.525 10C15.6667 11.3417 13.5167 14.0833 10.1833 14.1667Z" />
            <path d="M10 7.08334C9.42315 7.08334 8.85924 7.2544 8.3796 7.57489C7.89995 7.89538 7.52612 8.3509 7.30536 8.88385C7.08461 9.4168 7.02685 10.0032 7.13939 10.569C7.25193 11.1348 7.52971 11.6545 7.93762 12.0624C8.34552 12.4703 8.86522 12.7481 9.431 12.8606C9.99678 12.9732 10.5832 12.9154 11.1162 12.6947C11.6491 12.4739 12.1046 12.1001 12.4251 11.6204C12.7456 11.1408 12.9167 10.5769 12.9167 10C12.9167 9.22646 12.6094 8.4846 12.0624 7.93762C11.5154 7.39063 10.7736 7.08334 10 7.08334ZM10 11.25C9.75279 11.25 9.51111 11.1767 9.30555 11.0393C9.09999 10.902 8.93977 10.7068 8.84516 10.4784C8.75055 10.25 8.7258 9.99862 8.77403 9.75615C8.82226 9.51367 8.94131 9.29094 9.11613 9.11613C9.29094 8.94131 9.51367 8.82226 9.75615 8.77403C9.99862 8.7258 10.25 8.75055 10.4784 8.84516C10.7068 8.93977 10.902 9.09999 11.0393 9.30555C11.1767 9.51111 11.25 9.75278 11.25 10C11.25 10.3315 11.1183 10.6495 10.8839 10.8839C10.6495 11.1183 10.3315 11.25 10 11.25Z" />
          </g>
          <defs>
            <clipPath id="clip0_5661_2350">
              <rect fill="white" height="20" width="20" />
            </clipPath>
          </defs>
        </svg>
      ) : (
        <svg
          className={clsx(s.eyeOff, disabled && s.disabled)}
          height="20"
          viewBox="0 0 24 24"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
          {...otherProps}
        >
          <g>
            <path d="M4.71 3.29C4.61676 3.19676 4.50607 3.1228 4.38425 3.07234C4.26243 3.02188 4.13186 2.99591 4 2.99591C3.86814 2.99591 3.73757 3.02188 3.61575 3.07234C3.49393 3.1228 3.38324 3.19676 3.29 3.29C3.10169 3.47831 2.99591 3.7337 2.99591 4C2.99591 4.2663 3.10169 4.5217 3.29 4.71L8.92 10.34C8.5638 11.0026 8.43058 11.7624 8.54009 12.5067C8.64959 13.2509 8.99599 13.9401 9.52794 14.4721C10.0599 15.004 10.7491 15.3504 11.4934 15.4599C12.2376 15.5694 12.9974 15.4362 13.66 15.08L19.29 20.71C19.383 20.8037 19.4936 20.8781 19.6154 20.9289C19.7373 20.9797 19.868 21.0058 20 21.0058C20.132 21.0058 20.2627 20.9797 20.3846 20.9289C20.5064 20.8781 20.617 20.8037 20.71 20.71C20.8037 20.617 20.8781 20.5064 20.9289 20.3846C20.9797 20.2627 21.0058 20.132 21.0058 20C21.0058 19.868 20.9797 19.7373 20.9289 19.6154C20.8781 19.4936 20.8037 19.383 20.71 19.29L4.71 3.29ZM12 13.5C11.6022 13.5 11.2206 13.342 10.9393 13.0607C10.658 12.7794 10.5 12.3978 10.5 12V11.93L12.06 13.49L12 13.5Z" />
            <path d="M12.22 17C7.92 17.1 5.1 13.41 4.22 12C4.84647 11.0007 5.59936 10.0865 6.46 9.27999L5 7.87C3.87133 8.93347 2.90441 10.1564 2.13 11.5C2.04223 11.652 1.99603 11.8245 1.99603 12C1.99603 12.1755 2.04223 12.348 2.13 12.5C2.76 13.59 6.13 19 12.02 19H12.27C13.3775 18.9671 14.4708 18.7404 15.5 18.33L13.92 16.75C13.3644 16.8962 12.7942 16.98 12.22 17Z" />
            <path d="M21.87 11.5C21.23 10.39 17.7 4.81999 11.73 4.99999C10.6225 5.03285 9.52924 5.25961 8.5 5.66999L10.08 7.24999C10.6356 7.10382 11.2058 7.01997 11.78 6.99999C16.07 6.88999 18.89 10.59 19.78 12C19.1381 13.0023 18.3682 13.9167 17.49 14.72L19 16.13C20.1428 15.0693 21.1234 13.8462 21.91 12.5C21.9918 12.3445 22.0311 12.1702 22.0241 11.9946C22.0171 11.8191 21.9639 11.6485 21.87 11.5Z" />
          </g>
        </svg>
      )}
    </>
  );
};