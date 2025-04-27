"use client"; // if using Next.js 13/14 App Router
import { motion } from "motion/react";

import GitHubCalendar from "react-github-calendar";

export default function GitHubActivity() {
  return (
    <div className="flex justify-center p-4">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8 }}
      >
        <GitHubCalendar
          username="Aradhanadevi"
          blockSize={15}
          blockMargin={5}
          color="#00e676"
          fontSize={16}
        />
      </motion.div>
    </div>
  );
}
