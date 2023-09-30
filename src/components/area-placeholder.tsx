export default function AreaPlaceholder() {
  return (
    <div className="relative h-[576px] overflow-hidden rounded-xl border border-dashed border-gray-900/10 opacity-75 dark:border-gray-100/10">
      <svg
        className="absolute inset-0 h-full w-full stroke-gray-900/10 dark:stroke-gray-100/10"
        fill="none"
      >
        <defs>
          <pattern
            patternUnits="userSpaceOnUse"
            id="pattern"
            height="10"
            width="10"
            x="0"
            y="0"
          >
            <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
          </pattern>
        </defs>
        <rect
          fill="url(#pattern)"
          height="100%"
          stroke="none"
          width="100%"
        ></rect>
      </svg>
    </div>
  );
}
