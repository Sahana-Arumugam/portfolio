import aether_pic from "./assets/images/aether_pic.jpg";
import amazon_pic from "./assets/images/amazon_pic.png";
import carboloom_pic from "./assets/images/carboloom_pic.png";
import cert_1 from "./assets/images/cert_1.jpeg";
import expenzo_pic from "./assets/images/expenzo_pic.jpg";
import ieee_its_logo from "./assets/images/ieee_its_logo.jpeg";
import lambda_logo from "./assets/images/lambda_logo.jpg";
import { useState, useEffect, useRef, ReactNode } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform, useMotionValue, useVelocity } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { 
  Cpu, 
  Code2, 
  Database, 
  Globe, 
  Layers, 
  Trophy, 
  Briefcase, 
  ExternalLink, 
  Github,
  Linkedin, 
  Mail,
  Instagram,
  ChevronRight
} from 'lucide-react';

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const ArchitecturalButton = ({ 
  href, 
  children, 
  variant = 'minimal',
  className 
}: { 
  href: string, 
  children: ReactNode, 
  variant?: 'minimal' | 'warm',
  className?: string 
}) => {
  return (
    <motion.a
      href={href}
      initial="initial"
      whileHover="hover"
      className={cn(
        "group relative px-10 h-16 flex items-center justify-center overflow-hidden transition-all duration-700",
        variant === 'minimal' ? "bg-white/[0.02]" : "bg-copper-light/[0.03]",
        className
      )}
    >
      {/* Border Lines - Sequential Drawing */}
      {/* Top */}
      <motion.div 
        className="absolute top-0 left-0 h-[1px] bg-copper-light/30"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 0.6, delay: 2.4, ease: "easeInOut" }}
        variants={{ hover: { height: '2px', backgroundColor: 'rgba(198,142,23,0.6)' } }}
      />
      {/* Right */}
      <motion.div 
        className="absolute top-0 right-0 w-[1px] bg-copper-light/30"
        initial={{ height: 0 }}
        animate={{ height: '100%' }}
        transition={{ duration: 0.4, delay: 3.0, ease: "easeInOut" }}
        variants={{ hover: { width: '2px', backgroundColor: 'rgba(198,142,23,0.6)' } }}
      />
      {/* Bottom */}
      <motion.div 
        className="absolute bottom-0 right-0 h-[1px] bg-copper-light/30"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 0.6, delay: 3.4, ease: "easeInOut" }}
        variants={{ hover: { height: '2px', backgroundColor: 'rgba(198,142,23,0.6)' } }}
      />
      {/* Left */}
      <motion.div 
        className="absolute bottom-0 left-0 w-[1px] bg-copper-light/30"
        initial={{ height: 0 }}
        animate={{ height: '100%' }}
        transition={{ duration: 0.4, delay: 4.0, ease: "easeInOut" }}
        variants={{ hover: { width: '2px', backgroundColor: 'rgba(198,142,23,0.6)' } }}
      />

      {/* Background Fill */}
      <motion.div 
        className={cn(
          "absolute inset-0 -z-10",
          variant === 'minimal' ? "bg-white/[0.04]" : "bg-copper-light/[0.06]"
        )}
        variants={{
          initial: { x: '-100%' },
          hover: { x: 0 }
        }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />

      <span className={cn(
        "relative z-10 text-xs md:text-sm uppercase tracking-[0.4em] font-medium transition-colors duration-700",
        variant === 'minimal' ? "text-white/40 group-hover:text-white" : "text-copper-light/60 group-hover:text-copper-light"
      )}>
        {children}
      </span>
    </motion.a>
  );
};

const ResumeButton = () => {
  return (
    <motion.a
      href="/resumee.pdf" // User should replace with actual path
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.7, duration: 1 }}
      whileHover="hover"
      className="group relative px-10 py-4 flex items-center justify-center gap-3 overflow-hidden transition-all duration-500 rounded-[32px]"
    >
      {/* Brighter Outline */}
      <div className="absolute inset-0 border border-copper-light/40 rounded-[32px] group-hover:border-copper-light/60 transition-colors duration-500" />
      
      {/* Subtle Fill */}
      <motion.div 
        className="absolute inset-0 bg-copper-light/5 -z-10"
        variants={{
          hover: { backgroundColor: 'rgba(198,142,23,0.1)' }
        }}
        transition={{ duration: 0.6 }}
      />

      {/* Flickering Dot */}
      <motion.div
        animate={{ 
          opacity: [0.4, 1, 0.4],
          scale: [0.9, 1.1, 0.9]
        }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="w-2 h-2 rounded-full bg-copper-light shadow-[0_0_8px_rgba(198,142,23,0.6)]"
      />

      <span className="relative z-10 text-xs uppercase tracking-[0.4em] font-bold text-copper-light group-hover:text-white transition-colors duration-500">
        Resume
      </span>
    </motion.a>
  );
};

const TechnologyIcon = ({ name, slug, delay }: { name: string, slug: string, delay: number, key?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group flex flex-col items-center gap-3 p-4 rounded-xl transition-all duration-400 hover:bg-white/[0.03]"
    >
      <div className="relative w-10 h-10 flex items-center justify-center">
        <img 
          src={`https://cdn.simpleicons.org/${slug}/ececec`} 
          alt={name}
          className="w-8 h-8 object-contain transition-all duration-400 group-hover:scale-110 group-hover:brightness-125 group-hover:filter group-hover:drop-shadow-[0_0_8px_rgba(184,115,51,0.4)]"
          referrerPolicy="no-referrer"
          onError={(e) => {
            // Fallback if icon not found
            (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${name}&background=1a1a1a&color=ececec&size=64`;
          }}
        />
      </div>
      <span className="text-[10px] uppercase tracking-widest text-white/40 group-hover:text-copper-light transition-colors duration-400 text-center">
        {name}
      </span>
      <div className="w-0 h-[1px] bg-copper-light/40 group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
};

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [activeSection, setActiveSection] = useState<
    'home' | 'skills' | 'projects' | 'contact' | 'default'
  >('home');
  const [cursorVisible, setCursorVisible] = useState(true);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const velocityX = useVelocity(mouseX);
  const velocityY = useVelocity(mouseY);

  // Main Spark Spring
  const sparkX = useSpring(mouseX, { damping: 25, stiffness: 350, mass: 0.4 });
  const sparkY = useSpring(mouseY, { damping: 25, stiffness: 350, mass: 0.4 });

  // Trail Springs
  const trail1X = useSpring(mouseX, { damping: 35, stiffness: 180, mass: 0.7 });
  const trail1Y = useSpring(mouseY, { damping: 35, stiffness: 180, mass: 0.7 });
  const trail2X = useSpring(mouseX, { damping: 45, stiffness: 120, mass: 1.1 });
  const trail2Y = useSpring(mouseY, { damping: 45, stiffness: 120, mass: 1.1 });
  const trail3X = useSpring(mouseX, { damping: 55, stiffness: 80, mass: 1.5 });
  const trail3Y = useSpring(mouseY, { damping: 55, stiffness: 80, mass: 1.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement;
      const isInteractive = target.closest('button, a, .interactive');
      setIsHovering(!!isInteractive);
    };

    const handleMouseLeave = () => {
      setCursorVisible(false);
    };

    const handleMouseEnter = () => {
      setCursorVisible(true);
    };

    const handleBlur = () => {
      setCursorVisible(false);
    };

    const handleFocus = () => {
      setCursorVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('blur', handleBlur);
    window.addEventListener('focus', handleFocus);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('blur', handleBlur);
      window.removeEventListener('focus', handleFocus);
    };
  }, [mouseX, mouseY]);

  // Velocity-based effects
  const speed = useTransform([velocityX, velocityY], ([vx, vy]) =>
    Math.sqrt((vx as number) ** 2 + (vy as number) ** 2)
  );

  const angle = useTransform([velocityX, velocityY], ([vx, vy]) =>
    Math.atan2(vy as number, vx as number) * (180 / Math.PI)
  );

  const stretch = useTransform(speed, [0, 2000], [1, 2.2]);

  return (
    <AnimatePresence>
      {cursorVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0, pointerEvents: 'none' }}
          transition={{ duration: 0 }}
          className="cursor-spark-container pointer-events-none"
        >
          {/* Trail Layers */}
          <motion.div
            className="fixed top-0 left-0 w-0.5 h-0.5 bg-copper-light/5 rounded-full blur-[2px]"
            style={{ x: trail3X, y: trail3Y, translateX: '-50%', translateY: '-50%' }}
          />
          <motion.div
            className="fixed top-0 left-0 w-1 h-1 bg-copper-light/10 rounded-full blur-[1.5px]"
            style={{ x: trail2X, y: trail2Y, translateX: '-50%', translateY: '-50%' }}
          />
          <motion.div
            className="fixed top-0 left-0 w-1.5 h-1.5 bg-copper-light/20 rounded-full blur-[1px]"
            style={{ x: trail1X, y: trail1Y, translateX: '-50%', translateY: '-50%' }}
          />

          {/* Main Spark */}
          <motion.div
            className="fixed top-0 left-0 flex items-center justify-center"
            style={{
              x: sparkX,
              y: sparkY,
              translateX: '-50%',
              translateY: '-50%',
              rotate: activeSection === 'projects' ? angle : 0,
              scaleX: activeSection === 'projects' ? stretch : 1
            }}
          >
            {/* Outer Glow */}
            <motion.div
              animate={{
                scale: isHovering ? 3.5 : [1, 1.2, 1],
                opacity: 0.25
              }}
              transition={{
                scale: isHovering
                  ? { duration: 0.4 }
                  : { duration: 4, repeat: Infinity, ease: 'easeInOut' }
              }}
              className="absolute w-12 h-12 rounded-full blur-2xl bg-copper-light/30"
            />

            {/* Inner Glow */}
            <motion.div
              animate={{
                scale: isHovering ? 2 : [1, 1.1, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute w-6 h-6 bg-copper-light/40 rounded-full blur-lg"
            />

            {/* Core */}
            <motion.div
              animate={{
                scale: isHovering ? 1.4 : [1, 0.9, 1.1, 1],
                boxShadow: isHovering
                  ? '0 0 25px 4px rgba(198,142,23,0.8)'
                  : '0 0 12px 2px rgba(198,142,23,0.6)'
              }}
              transition={{
                scale: { duration: 0.2, repeat: Infinity, repeatType: 'reverse' }
              }}
              className="relative w-1.5 h-1.5 rounded-full bg-white z-10"
            />

            {/* Hover Ring */}
            <AnimatePresence>
              {isHovering && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1.2 }}
                  exit={{ opacity: 0, scale: 1.5 }}
                  className="absolute border border-copper-light/30 rounded-full w-14 h-14"
                />
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// reusable timeline node with premium copper glow and pulse
const TimelineNode = () => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="absolute left-4 md:left-8 top-2 -translate-x-1/2 flex items-center justify-center"
    style={{ width: 20, height: 20 }}
  >
    <div className="relative w-full h-full flex items-center justify-center">
      {/* outer ring */}
      <div className="absolute inset-0 rounded-full border-2 border-copper-light bg-elite-black" />
      {/* radial glow */}
      <div className="absolute inset-0 rounded-full blur-xl bg-copper-light/40" />
      {/* inner core */}
      <motion.div
        className="rounded-full bg-copper-light"
        style={{ width: 8, height: 8 }}
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  </motion.div>
);



const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<'reveal' | 'zoom'>('reveal');
  const oRef = useRef<HTMLSpanElement>(null);
  const [origin, setOrigin] = useState('center center');

  useEffect(() => {
    const zoomTimer = setTimeout(() => {
      if (oRef.current) {
        const rect = oRef.current.getBoundingClientRect();
        const parent = oRef.current.closest('.splash-text-container');
        if (parent) {
          const parentRect = parent.getBoundingClientRect();
          const x = ((rect.left + rect.width / 2) - parentRect.left) / parentRect.width * 100;
          const y = ((rect.top + rect.height / 2) - parentRect.top) / parentRect.height * 100;
          setOrigin(`${x}% ${y}%`);
        }
      }
      setPhase('zoom');
    }, 4500);
    
    const completeTimer = setTimeout(onComplete, 6500);
    
    return () => {
      clearTimeout(zoomTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[100] bg-elite-black flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      
      <motion.div 
        className="splash-text-container relative flex gap-3 md:gap-5 items-baseline pb-4"
        style={{ transformOrigin: origin }}
        animate={phase === 'zoom' ? {
          scale: 150,
          opacity: 0,
          transition: { duration: 2.5, ease: [0.645, 0.045, 0.355, 1] }
        } : {}}
      >
        {/* Built */}
        <motion.span
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl md:text-5xl font-serif italic text-white/90 tracking-widest pr-1"
        >
          Built
        </motion.span>

        {/* by */}
        <motion.span
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl md:text-5xl font-serif italic text-white/90 tracking-widest pr-1"
        >
          by
        </motion.span>

        {/* curiosity. */}
        <motion.span
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 1.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl md:text-5xl font-serif italic text-metallic tracking-widest inline-flex pr-2"
        >
          {"curiosity.".split("").map((char, i) => (
            <motion.span 
              key={i} 
              ref={char === 'o' ? oRef : null}
              animate={phase === 'reveal' ? {
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                transition: { duration: 3, delay: 2.9 + (i * 0.05), repeat: Infinity, ease: "linear" }
              } : {}}
              className="inline-block pb-2"
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showNavMobile, setShowNavMobile] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(window.scrollY > 50);
      
      // On mobile, show navbar when scrolling down, hide when scrolling up
      if (isMobile && currentScrollY > 100) {
        if (currentScrollY > lastScrollY.current) {
          // Scrolling down - show navbar
          setShowNavMobile(true);
        } else {
          // Scrolling up - hide navbar
          setShowNavMobile(false);
        }
      } else {
        // At top or near top on mobile - always show
        setShowNavMobile(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialIcons = [
    { icon: Github, href: 'https://github.com/Sahana-Arumugam', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sahanaarumugam', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/idkkkk___man/', label: 'Instagram' },
    { icon: Mail, href: 'mailto:sahanaarums16@gmail.com', label: 'Email' }
  ];

  return (
    <>
      <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: showNavMobile ? 0 : -100 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 transition-all duration-500 flex items-center justify-between",
        isScrolled ? "bg-elite-black/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent"
      )}
    >
      <div className="flex items-center gap-8">
        <a href="#home" className="text-lg font-serif font-bold tracking-widest text-white interactive">SA.</a>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="group relative text-[10px] uppercase tracking-[0.3em] text-white/50 hover:text-white transition-colors interactive"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-copper-light group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-6">
  {/* Desktop Social Icons */}
  <div className="hidden md:flex items-center gap-6">
    {socialIcons.map((social) => (
      <a 
        key={social.label}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/50 hover:text-copper-light transition-colors interactive"
      >
        <social.icon className="w-5 h-5" />
      </a>
    ))}
  </div>

  {/* Mobile Hamburger */}
  <button 
    onClick={() => setIsOpen(!isOpen)}
    className="md:hidden flex flex-col gap-1.5"
  >
    <span className="w-6 h-[1px] bg-white transition-all" />
    <span className="w-6 h-[1px] bg-white transition-all" />
    <span className="w-6 h-[1px] bg-white transition-all" />
  </button>
      </div>
    </motion.nav>

    <AnimatePresence>
      {isOpen && (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 right-0 h-screen w-full bg-elite-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-10"
    >
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          onClick={() => setIsOpen(false)}
          className="text-xl uppercase tracking-[0.4em] text-white hover:text-copper-light transition-colors"
        >
          {item.name}
        </a>
      ))}
    </motion.div>
  )}
  </AnimatePresence>
    </>
  );
};

const CinematicBackground = () => {
  const { scrollYProgress } = useScroll();
  
  // Parallax transforms
  const layer1Y = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const layer2Y = useTransform(scrollYProgress, [0, 1], ['0%', '-5%']);
  
  // Gradient shifts for "matte black" with subtle copper
  const gradientX = useTransform(scrollYProgress, [0, 1], ['30%', '70%']);
  const gradientY = useTransform(scrollYProgress, [0, 1], ['20%', '80%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.5, 0.3]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#0B0B0D]">
      {/* Base Noise - Constant grain */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] z-10" />

      {/* Layered Parallax Gradients */}
      <div className="absolute inset-0 w-full h-full">
        {/* Deep Ambient Glow - Matte foundation */}
        <motion.div 
          style={{ y: layer1Y }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(184,115,51,0.05)_0%,transparent_80%)] blur-[120px]"
        />

        {/* Shifting Copper Light Streak 1 */}
        <motion.div 
          style={{ 
            y: layer2Y, 
            left: gradientX,
            top: gradientY,
            opacity
          }}
          className="absolute w-[80%] h-[60%] bg-[radial-gradient(ellipse_at_center,rgba(198,142,23,0.08)_0%,transparent_70%)] rotate-[-10deg] blur-[140px]"
        />

        {/* Shifting Copper Light Streak 2 */}
        <motion.div 
          style={{ 
            y: layer1Y, 
            right: gradientX,
            bottom: gradientY,
            opacity: useTransform(scrollYProgress, [0, 1], [0.2, 0.4])
          }}
          className="absolute w-[70%] h-[70%] bg-[radial-gradient(ellipse_at_center,rgba(184,115,51,0.06)_0%,transparent_70%)] rotate-[20deg] blur-[160px]"
        />
      </div>

      {/* Floating Particles - Reacting to scroll */}
      <div className="absolute inset-0 z-20">
        {[...Array(15)].map((_, i) => (
          <Particle key={i} index={i} scrollYProgress={scrollYProgress} />
        ))}
      </div>

      {/* Depth Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.6)_100%)] pointer-events-none z-40" />
    </div>
  );
};

const Particle = ({ index, scrollYProgress }: any) => {
  const initialX = useRef(Math.random() * 100).current;
  const initialY = useRef(Math.random() * 100).current;
  const size = useRef(Math.random() * 3 + 1).current;
  const speed = useRef(Math.random() * 100 + 50).current;
  
  const y = useTransform(scrollYProgress, [0, 1], [`${initialY}%`, `${initialY - (speed / 10)}%`]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.4, 0.1]);

  return (
    <motion.div
      style={{ 
        left: `${initialX}%`,
        y,
        opacity,
        width: size,
        height: size,
      }}
      className="absolute rounded-full bg-copper-light shadow-[0_0_10px_rgba(198,142,23,0.5)]"
    />
  );
};

const SectionHeading = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-8 md:mb-12">
    {subtitle && (
      <motion.span 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 0.6, x: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="block text-xs uppercase tracking-[0.3em] font-sans mb-4 text-copper-light"
      >
        {subtitle}
      </motion.span>
    )}
    <motion.h2 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="text-4xl md:text-6xl font-serif text-white"
    >
      {title}
    </motion.h2>
    <motion.div 
      initial={{ width: 0 }}
      animate={{ width: '100px' }}
      transition={{ delay: 0.5, duration: 1 }}
      className="h-[1px] bg-copper-dark mt-6"
    />
  </div>
);

const ExperienceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section id="experience" ref={containerRef} className="relative py-16 px-6 bg-elite-dark/30 overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        <div className="flex flex-col items-start mb-12">
          <SectionHeading title="Professional Path." subtitle="Experience" />
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-8 top-2 bottom-0 w-[1px] bg-white/10 block" />
          {/* Animated Timeline Progress */}
          <motion.div 
            className="absolute left-4 md:left-8 top-2 w-[1px] bg-gradient-to-b from-copper-light via-copper-dark to-transparent origin-top block"
            style={{ 
              height: '100%',
              scaleY
            }}
          />

          <div className="space-y-16 relative">
            {[
              {
  role: "AI/ML Intern",
  company: "Team Lambda (Official SELECT Team)",
  period: "DST-funded Government of India Project",
  points: [
    "Developing and optimizing Machine Learning and Deep Learning models using Python, TensorFlow, PyTorch, and Scikit-learn",
    "Contributing to an autonomous solar panel inspection and maintenance robot project",
    "Performing data preprocessing, feature engineering, and model pipeline optimization using NumPy and Pandas"
  ],
  logo: lambda_logo
},
{
  role: "Technical Team Member",
  company: "IEEE Information Theory Society",
  period: "Technical Chapter at VIT Vellore",
  points: [
    "Led development and enhancement of the society’s official website",
    "Organized and executed technical events including coding contests, ML workshops, and bootcamps",
    "Hosted hackathons, mentored participants, and supported problem statement design and evaluation"
  ],
  logo: ieee_its_logo
}
            ].map((exp, idx) => (
              <div key={exp.company} className="relative flex flex-col md:flex-row items-center">
                {/* Timeline Node */}
                <TimelineNode />

                {/* Experience Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full md:ml-20 group relative"
                >
                  {/* Radial Light Background */}
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(198,142,23,0.05)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />                  
                  <div className="relative bg-elite-black/40 backdrop-blur-sm border border-white/5 p-8 hover:border-copper-light/30 transition-all duration-500 shadow-2xl">
                    {/* Top Accent Line */}
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-copper-light/40 to-transparent" />
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 shrink-0 flex items-center justify-center border border-copper-light/20 bg-elite-dark/50 overflow-hidden group-hover:border-copper-light transition-colors duration-500">
                          <img 
                            src={exp.logo} 
                            alt={exp.company} 
                            className="w-full h-full object-contain p-2"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white leading-tight">{exp.role}</h4>
                          <p className="text-copper-light text-xs uppercase tracking-[0.2em] mt-1">{exp.company}</p>
                        </div>
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-medium whitespace-nowrap bg-white/5 px-3 py-1 rounded-full self-start sm:self-center">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-4">
                      {exp.points.map((point, pIdx) => (
                        <li key={pIdx} className="text-white/50 text-sm font-light leading-relaxed flex items-start gap-4 group/item">
                          <span className="w-1.5 h-[1px] bg-copper-light/40 mt-2.5 shrink-0 group-hover/item:w-3 transition-all duration-300" />
                          <span className="group-hover/item:text-white/70 transition-colors duration-300">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const AchievementsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section id="achievements" ref={containerRef} className="relative py-16 px-6 bg-elite-dark/10 overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        <div className="flex flex-col items-start mb-12">
          <SectionHeading title="Recognition." subtitle="Achievements" />
        </div>

        <div className="relative">
  {/* Vertical Timeline Line */}
  <div className="absolute left-4 md:left-8 top-2 bottom-0 w-[1px] bg-white/10 block" />

  {/* Animated Timeline Progress */}
  <motion.div 
    className="absolute left-4 md:left-8 top-2 w-[1px] bg-gradient-to-b from-copper-light via-copper-dark to-transparent origin-top block"
    style={{ 
      height: '100%',
      scaleY
    }}
  />

<div className="space-y-20 relative pt-10">            {[
              {
                title: "1st Place",
                event: "IEEE TEMS Hack Expertise Hackathon",
                desc: "Won the sustainability track at an inter-college hackathon with AETHER, an interactive experience that transformed complex environmental data into an intuitive and engaging platform. The project stood out for blending impactful design with purpose-driven innovation.",
                image: cert_1,
                icon: Trophy
              },
              {
                title: "Proficiency Award",
                event: "Artificial Intelligence Excellence",
                desc: "Recognized for outstanding academic and practical performance in Artificial Intelligence and Machine Learning domains.", 
                icon: Trophy
                
              }
            ].map((ach, idx) => (
              <div key={ach.event} className="relative flex flex-col md:flex-row items-start">
                {/* Timeline Node */}
                <TimelineNode />
                {/* Achievement Card */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.1 }}
                  className="w-full md:ml-20 group relative"
                >
                  <div className="relative bg-elite-black/40 backdrop-blur-sm border border-white/5 p-0 hover:border-copper-light/30 transition-all duration-500 shadow-2xl overflow-hidden flex flex-col lg:flex-row">
                    {/* Image Section */}
                    {ach.image && (
                      <div className="w-full lg:w-2/5 h-64 lg:h-auto overflow-hidden relative">
                        <motion.img 
                          src={ach.image} 
                          alt={ach.event} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-elite-black via-transparent to-transparent opacity-60" />
                        
                        {/* Floating Icon */}
                        <div className="absolute top-4 left-4 p-3 bg-elite-black/80 border border-copper-light/30 backdrop-blur-md">
                          <ach.icon className="w-6 h-6 text-copper-light" />
                        </div>
                      </div>
                    )}

                    {/* Content Section */}
                    <div className={`${ach.image ? 'flex-1' : 'w-full'} p-8 relative`}>
                      {/* Top Accent Line */}
                      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-copper-light/40 via-transparent to-transparent" />
                      
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <h4 className="text-2xl font-serif text-white group-hover:text-copper-light transition-colors duration-500">
                            {ach.title}
                          </h4>
                          <p className="text-white/40 text-xs uppercase tracking-widest mt-1">
                            {ach.event}
                          </p>
                        </div>
                      </div>

                      <p className="text-white/50 text-sm font-light leading-relaxed mb-8 max-w-xl">
                        {ach.desc}
                      </p>

                      {/* Creative Element: Decorative Numbers */}
                      <div className="absolute bottom-4 right-8 opacity-[0.03] text-8xl font-serif text-white pointer-events-none select-none">
                        0{idx + 1}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Main App ---

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-elite-black selection:bg-copper-light selection:text-black">
      <AnimatePresence>
        {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>

      {!showSplash && (
        <>
          <CustomCursor />
          <Navbar />
          
          {/* Progress Bar */}
          <motion.div 
            className="fixed top-0 left-0 right-0 h-[2px] bg-copper-light z-50 origin-left"
            style={{ scaleX }}
          />

          <CinematicBackground />

          <main className="relative z-10 space-y-0">
            {/* Hero Section */}
            <section id="home" className="relative min-h-[85vh] flex flex-col items-center justify-center pt-20 px-6">
              <div className="max-w-7xl w-full mx-auto text-center z-10 flex flex-col items-center">
                {/* Massive Name */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, filter: 'blur(20px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center justify-center text-center select-none mb-20 md:mb-24"
                >
                  <h1 className="text-[18vw] md:text-[14vw] font-sans font-black leading-[0.8] text-[#F5F5F3] tracking-tighter flex flex-col items-center">
                    <span className="hover:text-copper-light transition-colors duration-700 cursor-default">SAHANA</span>
                    <span className="hover:text-copper-light transition-colors duration-700 cursor-default">ARUMUGAM</span>
                  </h1>
                </motion.div>

                {/* Tagline, Divider, Explore, and CTAs */}
                <div className="flex flex-col items-center w-full max-w-2xl mx-auto space-y-12 md:space-y-16">
                  {/* Tagline */}
                  <div className="flex flex-col items-center gap-8">
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 1.5 }}
                      className="text-copper-light font-sans text-sm md:text-base tracking-[0.4em] uppercase font-medium text-center"
                    >
                      Built by curiosity.
                    </motion.p>
                    
                    <ResumeButton />
                  </div>
                  
                  {/* Divider Line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.5, delay: 1.8, ease: "easeInOut" }}
                    className="w-24 h-[1px] bg-copper-light/30"
                  />

                  {/* Explore Text */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.1, duration: 1 }}
                    className="flex flex-col items-center gap-12"
                  >
                    <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 font-medium">Explore</span>
                    
                    {/* Vertical Line below Explore */}
                    <motion.div
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="w-[1px] h-16 bg-gradient-to-b from-copper-light to-transparent"
                    />
                  </motion.div>

                  {/* CTAs - Centered Group */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-8 w-full">
                    <ArchitecturalButton href="#projects" variant="minimal" className="w-full max-w-[300px]">
                      <span className="flex items-center gap-3">
                        View Projects <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500" />
                      </span>
                    </ArchitecturalButton>
                    <ArchitecturalButton href="#contact" variant="warm" className="w-full max-w-[300px]">
                      Get in Touch
                    </ArchitecturalButton>
                  </div>
                </div>
              </div>
            </section>

            {/* About Section */}
            <section id="about" className="relative py-16 px-6">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                  <div className="lg:col-span-5">
                    <SectionHeading title="Precision & Purpose." subtitle="About Me" />
                  </div>
                  
                  <div className="lg:col-span-7">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                      className="space-y-8"
                    >
                      <p className="text-xl md:text-2xl font-light leading-relaxed text-white/80">
                        Motivated Computer Science undergraduate specializing in AI/ML, 
                        full-stack development, and scalable system design.
                      </p>
                      <p className="text-lg text-white/60 leading-relaxed">
                        Currently pursuing Integrated M.Tech in Software Engineering at VIT Vellore. 
                        I focus on building impactful real-world solutions through strong foundations 
                        in Data Structures, Machine Learning, and Software Engineering.
                      </p>
                      <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="p-6 border border-copper-light/20 bg-white/[0.02] rounded-lg group hover:border-copper-light/50 transition-colors duration-500">
                          <h4 className="text-copper-light uppercase tracking-widest text-xs mb-3 font-bold">Education</h4>
                          <p className="text-sm text-white/80">Integrated M.Tech (SE)</p>
                          <p className="text-xs text-white/40 mt-1">VIT Vellore</p>
                        </div>
                        <div className="p-6 border border-copper-light/20 bg-white/[0.02] rounded-lg group hover:border-copper-light/50 transition-colors duration-500">
                          <h4 className="text-copper-light uppercase tracking-widest text-xs mb-3 font-bold">Focus</h4>
                          <p className="text-sm text-white/80">AI/ML & Full Stack</p>
                          <p className="text-xs text-white/40 mt-1">Scalable Systems</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="relative py-16 px-6">
              <div className="max-w-7xl mx-auto">
                <SectionHeading title="Technical Arsenal." subtitle="Expertise" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                  {[
                    { 
                      title: "Languages", 
                      techs: [
                        { name: "Python", slug: "python" },
                        { name: "C", slug: "c" },
                        { name: "C++", slug: "cplusplus" },
                        { name: "Java", slug: "java" },
                        { name: "R", slug: "r" },
                        { name: "JavaScript", slug: "javascript" },
                        { name: "TypeScript", slug: "typescript" }
                      ]
                    },
                    { 
                      title: "Frontend", 
                      techs: [
                        { name: "HTML5", slug: "html5" },
                        { name: "CSS3", slug: "css3" },
                        { name: "React", slug: "react" },
                        { name: "Next.js", slug: "nextdotjs" },
                        { name: "Tailwind", slug: "tailwindcss" },
                        { name: "Figma", slug: "figma" },
                        { name: "Canva", slug: "canva" }
                      ]
                    },
                    { 
                      title: "Backend", 
                      techs: [
                        { name: "Node.js", slug: "nodedotjs" },
                        { name: "Express", slug: "express" },
                        { name: "Next.js", slug: "nextdotjs" }
                      ]
                    },
                    { 
                      title: "Databases", 
                      techs: [
                        { name: "MongoDB", slug: "mongodb" },
                        { name: "PostgreSQL", slug: "postgresql" },
                        { name: "Oracle", slug: "oracle" },
                        { name: "Firebase", slug: "firebase" },
                        { name: "Supabase", slug: "supabase" }
                      ]
                    },
                    { 
                      title: "Cloud & DevOps", 
                      techs: [
                        { name: "AWS", slug: "amazonwebservices" },
                        { name: "Azure", slug: "microsoftazure" },
                        { name: "Docker", slug: "docker" },
                        { name: "Vercel", slug: "vercel" },
                        { name: "Render", slug: "render" },
                        { name: "GitHub", slug: "github" },
                        { name: "SaltStack", slug: "saltstack" }
                      ]
                    },
                    { 
                      title: "Machine Learning", 
                      techs: [
                        { name: "TensorFlow", slug: "tensorflow" },
                        { name: "PyTorch", slug: "pytorch" },
                        { name: "Scikit-Learn", slug: "scikitlearn" },
                        { name: "NumPy", slug: "numpy" },
                        { name: "Pandas", slug: "pandas" },
                        { name: "Matplotlib", slug: "matplotlib" },
                        { name: "Seaborn", slug: "seaborn" }
                      ]
                    },
                    { 
                      title: "Quality Assurance", 
                      techs: [
                        { name: "Mocha", slug: "mocha" },
                        { name: "Chai", slug: "chai" },
                        { name: "Supertest", slug: "supertest" }
                      ]
                    }
                  ].map((category, idx) => (
                    <motion.div 
                      key={category.title}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: idx * 0.1 }}
                      className="relative p-8 border border-white/5 bg-white/[0.01] rounded-2xl overflow-hidden group"
                    >
                      {/* Architectural Accent */}
                      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-copper-light/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                      
                      <h3 className="text-sm uppercase tracking-[0.3em] text-copper-light mb-10 font-medium">
                        {category.title}
                      </h3>
                      
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                        {category.techs.map((tech, techIdx) => (
                          <TechnologyIcon 
                            key={tech.name} 
                            name={tech.name} 
                            slug={tech.slug} 
                            delay={0.2 + (techIdx * 0.05)} 
                          />
                        ))}
                      </div>

                      {/* Subtle Background Glow */}
                      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-copper-light/5 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="relative py-16 px-6">
              <div className="max-w-6xl mx-auto">
                <div className="mb-12">
                  <SectionHeading title="Engineered Solutions." subtitle="Projects" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {[
                    {
                      title: "CarboLoom",
                      desc: "TypeScript-based application to calculate and track daily carbon footprint using interactive dashboards, real-time updates, and category-wise emission breakdowns to promote sustainable user behavior.",
                      tags: ["React", "Express.js", "MongoDB"],
                      image: carboloom_pic,
                      github: "https://github.com/Sahana-Arumugam/carboloom",
                      live: "https://carboloomapp.vercel.app/"
                    },
                    {
                      title: "AETHER",
                      desc: "UI/UX-focused front-end interface built using TypeScript and CSS with smooth animations, responsive layouts, and an immersive, visually engaging user experience.",
                      tags: ["Framer Motion", "Figma", "TypeSript"],
                      image: aether_pic,
                      github: "https://github.com/Sahana-Arumugam/AETHER",
                      live: "#"
                    },
                    {
                      title: "ExpenZo",
                      desc: "Personal finance tracker developed using TypeScript and Vite with secure CRUD operations, expense categorization, analytics-ready data storage, and deployment on AWS (S3, EC2).",
                      tags: ["S3","EC2", "TypeSript", "Tailwind CSS", "MongoDB"],
                      image: expenzo_pic,
                      github: "https://github.com/Sahana-Arumugam/expenzo-fullstack",
                      live: "https://expenzo-mauve.vercel.app/"
                    },
                    {
                      title: "Amazon Clone",
                      desc: "E-commerce platform built with React and Express featuring Firebase authentication, Stripe payment integration, dynamic product management, and end-to-end purchase workflows.",
                      tags: ["Javascript", "Firebase", "React","Stripe"],
                      image: amazon_pic,
                      github: "https://github.com/Sahana-Arumugam/amazon-clone",
                      live: "https://project-f2af1.web.app/"
                    }
                  ].map((project, idx) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.8 }}
                      className="group relative bg-elite-dark/20 border border-white/5 overflow-hidden interactive"
                    >
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="p-8">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-2xl font-serif text-white">{project.title}</h3>
                          <div className="flex gap-4">
                            <a href={project.github} className="text-white/40 hover:text-copper-light transition-colors" title="View Repository">
                              <Github className="w-5 h-5" />
                            </a>
                            <a href={project.live} className="text-white/40 hover:text-copper-light transition-colors" title="Live Demo">
                              <ExternalLink className="w-5 h-5" />
                            </a>
                          </div>
                        </div>
                        <p className="text-white/50 mb-6 font-light">{project.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map(tag => (
                            <span key={tag} className="text-[10px] uppercase tracking-widest text-copper-light/60">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-copper-light scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            <ExperienceSection />

            <AchievementsSection />

            {/* Contact Section */}
            <section id="contact" className="relative py-16 px-6 overflow-hidden">
              <div className="max-w-4xl mx-auto text-center">
                <SectionHeading title="Let's Build the Future." subtitle="Contact" />
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-xl text-white/60 mb-12 font-light"
                >
                  Currently seeking internship opportunities and collaborations in AI/ML and Software Engineering.
                </motion.p>
                
                <div className="flex flex-wrap justify-center gap-8">
                  {[
                    { icon: Mail, label: "Email", href: "mailto:sahanaarums16@gmail.com" },
                    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sahanaarumugam/" },
                    { icon: Github, label: "GitHub", href: "https://github.com/Sahana-Arumugam" },
                    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/idkkkk___man/" }
                  ].map((social, idx) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith('mailto:') ? undefined : "_blank"}
                      rel={social.href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="group flex items-center gap-3 px-6 py-3 border border-white/10 hover:border-copper-light/40 transition-all interactive"
                    >
                      <social.icon className="w-5 h-5 text-white/40 group-hover:text-copper-light transition-colors" />
                      <span className="text-sm uppercase tracking-widest group-hover:text-white transition-colors">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
              
              <footer className="mt-32 pt-12 border-t border-white/5 text-center">
                <p className="text-[10px] uppercase tracking-[0.5em] text-white/20">
                  © 2026 Sahana Arumugam. Engineered with Precision.
                </p>
              </footer>
            </section>
          </main>
        </>
      )}
    </div>
  );
}
