"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";
import createGlobe from "cobe";


export function BentoGrid() {
  return (
    <div className="mx-auto my-20 w-full max-w-7xl px-4 md:px-8">
      <Header>
        <h2 className="text-bold text-neutral-8000 mx-auto w-fit text-center font-sans text-xl font-bold tracking-tight text-neutral-800 md:text-6xl dark:text-neutral-100">
          O que você aprenderá nesta reunião?
        </h2>
      </Header>
     
      <div className="cols-1 mt-20 grid gap-4 md:auto-rows-[25rem] md:grid-cols-6">
        <Card className="flex flex-col justify-between md:col-span-2">
          <CardSkeletonBody>
            <SkeletonOne />
          </CardSkeletonBody>
          <CardContent className="h-40 justify-center">
            <CardTitle>* Do básico ao avançado de como montar e vender seu infoproduto</CardTitle>
            <CardDescription className="h-30 justify-center" >
              Como espionar as ofertas mais escaladas em tempo real e fazer a engenharia reversa,
              e assim escalar na sua oferta!
            </CardDescription>
            </CardContent>
        </Card>

        <Card className="flex flex-col justify-between md:col-span-2">
          <CardContent className="h-40">
            <CardTitle>E quem sou eu pra te falar tudo isso?</CardTitle>
            <CardDescription>
              Me chamo Ramiro Amorim ja faturei 7 Milhões no digital em menos de 3 anos,
              apenas no mercado de trafego de resposta direta!
            </CardDescription>
          </CardContent>
          <CardSkeletonBody>
            <div className="mt-2 ml-6 h-full w-full rounded-lg border border-neutral-200 bg-neutral-100 p-4 dark:border-neutral-700 dark:bg-neutral-800">
              <img
                src="/Imagem-new-capa.jpeg"
                alt="Dashboard"
                width={500}
                height={500}
                className="w-full h-40 rounded-lg object-cover md:h-full"
              />
            </div>
          </CardSkeletonBody>
        </Card>

        <Card className="flex flex-col justify-between md:col-span-2">
          <CardContent className="h-40">
            <CardTitle>ESTOU A 3 ANOS NO MERCADO!</CardTitle>
            <CardDescription>
              VENDENDO PARA MAIS DE 193 PAÍSES AO REDOR DO MUNDO! 
            </CardDescription>
          </CardContent>
          <CardSkeletonBody>
            <SkeletonTwo />
          </CardSkeletonBody>
        </Card>

       </div>   </div>
  );
}

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative mx-auto flex w-fit items-center justify-center p-2">
      <motion.div
        initial={{ width: 0, height: 0, borderRadius: 0 }}
        whileInView={{ width: "100%", height: "100%" }}
        style={{ transformOrigin: "top-left" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute inset-0 h-full w-full border border-neutral-200 dark:border-neutral-800"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute -top-1 -left-1 h-2 w-2 bg-neutral-200 dark:bg-neutral-800"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute -top-1 -right-1 h-2 w-2 bg-neutral-200 dark:bg-neutral-800"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute -bottom-1 -left-1 h-2 w-2 bg-neutral-200 dark:bg-neutral-800"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute -right-1 -bottom-1 h-2 w-2 bg-neutral-200 dark:bg-neutral-800"
        />
      </motion.div>
      {children}
    </div>
  );
};

// Skeletons

export const SkeletonOne = () => {
  const Container = ({
    children,
    ...props
  }: { children: React.ReactNode } & React.ComponentProps<
    typeof motion.div
  >) => {
    return (
      <motion.div
        {...props}
        className={cn(
          "relative flex h-14 w-full items-center justify-center rounded-lg bg-gradient-to-b from-white to-white p-4 shadow-lg md:h-40 md:px-8 dark:from-neutral-800 dark:to-neutral-700",
          props.className,
        )}
      >
        {children}
      </motion.div>
    );
  };
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <svg
        width="128"
        height="69"
        viewBox="0 0 128 69"
        fill="none"
        className="absolute -top-2 left-1/2 -translate-x-[90%] text-neutral-200 dark:text-neutral-800"
      >
        <path
          d="M1.00002 0.5L1.00001 29.5862C1 36.2136 6.37259 41.5862 13 41.5862H115C121.627 41.5862 127 46.9588 127 53.5862L127 75"
          stroke="currentColor"
          strokeWidth="1"
        />
        <motion.path
          d="M1.00002 0.5L1.00001 29.5862C1 36.2136 6.37259 41.5862 13 41.5862H115C121.627 41.5862 127 46.9588 127 53.5862L127 75"
          stroke="url(#gradient-2)"
          strokeWidth="1"
        />

        <defs>
          <motion.linearGradient
            initial={{ x1: "0%", y1: "0%", x2: "0%", y2: "0%" }}
            animate={{ x1: "100%", y1: "90%", x2: "120%", y2: "120%" }}
            id="gradient-2"
            transition={{
              duration: Math.random() * (7 - 2) + 2,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            <stop stopColor="#001AFF" stopOpacity={`0`} />
            <stop offset="1" stopColor="#6DD4F5" />
            <stop offset="1" stopColor="#6DD4F5" stopOpacity="0" />
          </motion.linearGradient>
        </defs>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="62"
        height="105"
        viewBox="0 0 62 105"
        fill="none"
        className="absolute -bottom-2 left-1/2 -translate-x-0 text-neutral-200 dark:text-neutral-800"
      >
        <path
          d="M1.00001 -69L1 57.5C1 64.1274 6.37258 69.5 13 69.5H49C55.6274 69.5 61 74.8726 61 81.5L61 105"
          stroke="currentColor"
          strokeWidth="1"
        />
        <motion.path
          d="M1.00001 -69L1 57.5C1 64.1274 6.37258 69.5 13 69.5H49C55.6274 69.5 61 74.8726 61 81.5L61 105"
          stroke="url(#gradient-1)"
          strokeWidth="1"
        />
        <defs>
          <motion.linearGradient
            initial={{ x1: "0%", y1: "0%", x2: "0%", y2: "0%" }}
            animate={{ x1: "100%", y1: "90%", x2: "120%", y2: "120%" }}
            id="gradient-1"
            transition={{
              duration: Math.random() * (7 - 2) + 2,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            <stop stopColor="#001AFF" stopOpacity={`0`} />
            <stop offset="1" stopColor="#6DD4F5" />
            <stop offset="1" stopColor="#6DD4F5" stopOpacity="0" />
          </motion.linearGradient>
        </defs>
      </svg>
      <div className="relative z-30 mx-auto grid w-full max-w-lg grid-cols-1 gap-4 p-8 [perspective:1000px] [transform-style:preserve-3d] sm:p-0 md:grid-cols-3">
        <Container
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0], rotateX: [0, 10, 0] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 6,
          }}
          className="flex-col items-start justify-center overflow-hidden px-2 font-mono text-neutral-800 dark:text-neutral-300"
        >
          <p className="bg-transparent text-[8px]">1. Minerar</p>
          <p className="bg-transparent text-[8px]">
            2. Modelar
          </p>
          <p className="bg-transparent text-[8px]">3. ESCALAR</p>
        </Container>
        <Container
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0], rotateX: [0, 10, 0] }}
          transition={{
            duration: 2,
            delay: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 6,
          }}
        >
          <MetaLogo />
        </Container>
        <Container
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0], rotateX: [0, 10, 0] }}
          transition={{
            duration: 2,
            delay: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 6,
          }}
          className="flex flex-col items-center justify-center"
        >
          <AWSLogo />
          <p className="bg-transparent text-[8px]">Escalar a nivel global $</p>
        </Container>
      </div>
    </div>
  );
};

const FBAdsWave = () => {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 object-contain text-black dark:text-white"
    >
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Dribbble-Light-Preview"
          transform="translate(-140.000000, -7559.000000)"
          fill="currentColor"
        >
          <g id="icons" transform="translate(56.000000, 160.000000)">
            <path
              d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
              id="github-[#142]"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
};
const AWSLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="h-8 w-8 object-contain text-yellow-500"
      viewBox="0 0 16 16"
    >
      <path d="M0 5a5 5 0 0 0 4.027 4.905 6.5 6.5 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05q-.001-.07.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.5 3.5 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98q-.004.07-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5m16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674z" />
    </svg>
  );
};

const MetaLogo = () => {
  return (
    <svg
      width="32px"
      height="32px"
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 object-contain"
    >
      <path
        fill="#1877F2"
        d="M5,19.5c0-4.6,2.3-9.4,5-9.4c1.5,0,2.7,0.9,4.6,3.6c-1.8,2.8-2.9,4.5-2.9,4.5c-2.4,3.8-3.2,4.6-4.5,4.6 C5.9,22.9,5,21.7,5,19.5 M20.7,17.8L19,15c-0.4-0.7-0.9-1.4-1.3-2c1.5-2.3,2.7-3.5,4.2-3.5c3,0,5.4,4.5,5.4,10.1 c0,2.1-0.7,3.3-2.1,3.3S23.3,22,20.7,17.8 M16.4,11c-2.2-2.9-4.1-4-6.3-4C5.5,7,2,13.1,2,19.5c0,4,1.9,6.5,5.1,6.5 c2.3,0,3.9-1.1,6.9-6.3c0,0,1.2-2.2,2.1-3.7c0.3,0.5,0.6,1,0.9,1.6l1.4,2.4c2.7,4.6,4.2,6.1,6.9,6.1c3.1,0,4.8-2.6,4.8-6.7 C30,12.6,26.4,7,22.1,7C19.8,7,18,8.8,16.4,11"
      />
    </svg>
  );
};

export const SkeletonTwo = () => {
  return (
    <div className="relative mt-10 flex h-60 flex-col items-center bg-transparent md:h-60 dark:bg-transparent">
      <Globe className="absolute -right-0 -bottom-80 md:-right-10 md:-bottom-72" />
    </div>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.0, 0.2, 0.6],
      markerColor: [0, 0, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};

// Card structure
const CardSkeletonBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)}>
      {children}
    </div>
  );
};

const CardContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("p-6", className)}>{children}</div>;
};

const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "font-sans text-base font-medium tracking-tight text-neutral-700 dark:text-neutral-100",
        className,
      )}
    >
      {children}
    </h3>
  );
};
const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "mt-2 max-w-xs font-sans text-base font-normal tracking-tight text-neutral-500 dark:text-neutral-400",
        className,
      )}
    >
      {children}
    </p>
  );
};

const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      whileHover="animate"
      className={cn(
        "group isolate flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] dark:bg-neutral-900",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};
