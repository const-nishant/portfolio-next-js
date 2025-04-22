"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  period,
  description,
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Link
      href={href || "#"}
      className={cn(
        "group flex items-center justify-between px-3 py-3 sm:px-4 rounded-md transition-all duration-200",
        description ? "hover:bg-muted/30" : ""
      )}
      onClick={handleClick}
    >
      {/* Left: Logo + Title/Sub */}
      <div className="flex items-center gap-3 sm:gap-4">
        <Avatar className="size-12 border bg-muted dark:bg-foreground rounded-md">
          <AvatarImage src={logoUrl} alt={altText} className="object-contain" />
          <AvatarFallback>{altText[0]}</AvatarFallback>
        </Avatar>

        <div className="flex flex-col">
          <div className="flex items-center gap-1 font-semibold text-sm sm:text-base">
            {title}
            {description && (
              <ChevronRightIcon
                className={cn(
                  "size-4 transition-transform duration-300",
                  isExpanded ? "rotate-90" : "rotate-0"
                )}
              />
            )}
          </div>
          {subtitle && (
            <div className="text-xs sm:text-sm text-muted-foreground leading-snug">
              {subtitle}
            </div>
          )}
        </div>
      </div>

      {/* Right: Period */}
      <div className="text-xs sm:text-sm text-muted-foreground text-right whitespace-nowrap">
        {period}
      </div>

      {/* Expandable Description */}
      {description && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,

                height: isExpanded ? "auto" : 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-2 text-xs sm:text-sm"
            >
              {description}
            </motion.div>
          )}
    </Link>
  );
};
