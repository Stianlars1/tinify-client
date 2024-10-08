"use client";
import { useDarkMode } from "@/hooks/useDarkmode";

export const TinifyLogoAuto = ({ className = "" }: { className?: string }) => {
  const isDarkmode = useDarkMode();
  return (
    <>
      {isDarkmode ? (
        <svg
          width="2000"
          height="2000"
          viewBox="0 0 2000 2000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <rect width="2000" height="2000" rx="256" fill="white" />
          <rect
            x="177"
            y="177"
            width="1646"
            height="1646"
            rx="64"
            fill="black"
          />
          <rect
            x="177"
            y="801.383"
            width="1646"
            height="419.181"
            fill="white"
          />
          <rect
            x="1208.49"
            y="177"
            width="1646"
            height="419.181"
            transform="rotate(90 1208.49 177)"
            fill="white"
          />
          <rect x="333" y="345" width="1332" height="1332" fill="white" />
          <rect
            x="240.646"
            y="424.153"
            width="243.224"
            height="1901.45"
            transform="rotate(-45 240.646 424.153)"
            fill="black"
          />
          <rect
            x="1585.17"
            y="252.168"
            width="243.224"
            height="1901.45"
            transform="rotate(45 1585.17 252.168)"
            fill="black"
          />
          <rect
            x="670.8"
            y="1340.17"
            width="658.4"
            height="658.4"
            transform="rotate(-90 670.8 1340.17)"
            fill="black"
          />
          <rect
            x="703"
            y="1306"
            width="592"
            height="592"
            rx="24"
            transform="rotate(-90 703 1306)"
            fill="white"
          />
        </svg>
      ) : (
        <svg
          width="2000"
          height="2000"
          viewBox="0 0 2000 2000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <path
            d="M0 256C0 114.615 114.615 0 256 0H1744C1885.38 0 2000 114.615 2000 256V1744C2000 1885.38 1885.38 2000 1744 2000H256C114.615 2000 0 1885.38 0 1744V256Z"
            fill="black"
          />
          <path
            d="M177 241C177 205.654 205.654 177 241 177H1759C1794.35 177 1823 205.654 1823 241V1759C1823 1794.35 1794.35 1823 1759 1823H241C205.654 1823 177 1794.35 177 1759V241Z"
            fill="white"
          />
          <path d="M177 801.383H1823V1220.56H177V801.383Z" fill="black" />
          <path
            d="M1208.49 177L1208.49 1823H789.312L789.312 177L1208.49 177Z"
            fill="black"
          />
          <path d="M333 345H1665V1677H333V345Z" fill="black" />
          <path
            d="M240.646 424.153L412.631 252.167L1757.16 1596.7L1585.17 1768.68L240.646 424.153Z"
            fill="white"
          />
          <path
            d="M1585.17 252.168L1757.16 424.153L412.631 1768.68L240.646 1596.7L1585.17 252.168Z"
            fill="white"
          />
          <path
            d="M670.8 1340.17V681.773L1329.2 681.773V1340.17H670.8Z"
            fill="white"
          />
          <path
            d="M727 1306C713.745 1306 703 1295.25 703 1282V738C703 724.745 713.745 714 727 714H1271C1284.25 714 1295 724.745 1295 738V1282C1295 1295.25 1284.25 1306 1271 1306H727Z"
            fill="black"
          />
        </svg>
      )}
    </>
  );
};
