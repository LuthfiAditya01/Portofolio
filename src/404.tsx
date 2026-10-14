import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-[#171719] text-[#F4F1E9] neo-grid-bg">
      <div className="font-['JetBrains_Mono'] text-[#FF3B45] text-xs font-bold mb-3 border border-[#FF3B45]/40 bg-[#242429] px-3 py-1">
        ERROR // 404: RESOURCE_NOT_FOUND
      </div>
      <h1 className="font-['Space_Grotesk'] text-4xl sm:text-6xl font-bold uppercase mb-4 text-[#F4F1E9]">
        SIGNAL LOST <span className="text-[#FF3B45]">//</span>
      </h1>
      <p className="font-['Inter'] text-[#85858D] text-sm sm:text-base max-w-md mb-8 leading-relaxed">
        The sector you requested does not exist or has been relocated within the NEO//PLAY system directory.
      </p>
      <Link
        to="/"
        className="btn-signal text-xs py-3 px-6"
      >
        <span>RETURN TO BASE</span>
        <span>→</span>
      </Link>
    </div>
  );
}
