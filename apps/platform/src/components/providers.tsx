'use client'

import { Provider as JotaiProvider } from 'jotai'
import { TRPCReactProvider } from "@/trpc/react";
import React from 'react'

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <JotaiProvider>
      <TRPCReactProvider>
        {children}
      </TRPCReactProvider>
    </JotaiProvider>
  )
}