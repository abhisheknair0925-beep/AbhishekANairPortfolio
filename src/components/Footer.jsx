import { Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./Icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="text-center md:text-left">
          <a href="#" className="text-2xl font-heading font-bold text-slate-100 tracking-tighter mb-2 block">
            Abhishek<span className="text-teal-400">.</span>
          </a>
          <p className="text-slate-500 text-sm">
            Building scalable systems & powering real-time intelligence.
          </p>
        </div>

        <div className="flex items-center gap-6 text-slate-400">
          <a href="https://github.com/abhisheknair0925-beep" target="_blank" rel="noreferrer" className="hover:text-teal-400 transition-colors">
            <GithubIcon className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-indigo-400 transition-colors">
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors">
            <TwitterIcon className="w-5 h-5" />
          </a>
        </div>

      </div>
      
      <div className="container mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm">
          &copy; {currentYear} Abhishek A Nair. All rights reserved.
        </p>
        <p className="text-slate-500 text-sm flex items-center gap-1">
          Designed with <Heart className="w-4 h-4 text-pink-500 inline" /> & React
        </p>
      </div>
    </footer>
  );
};

export default Footer;
