"use client"

import { motion } from "framer-motion"
import { WHATSAPP_LINK } from "./contact"

export function CTA() {
  return (
    <section id="cta" className="py-16 md:py-24">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-primary/40 bg-card px-6 py-16 text-center md:py-20"
        >
          <div className="relative">
            <h2 className="heading-font text-3xl text-foreground sm:text-5xl md:text-6xl">
              Ready For An <span style={{ color: "#d7cc32" }}>Amazing Experience?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
              Book your visit today and discover everything Star City has to offer for the whole family.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 sm:w-auto"
              >
                Book Your Visit
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full border border-primary px-8 py-3.5 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground sm:w-auto"
              >
                Contact Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
