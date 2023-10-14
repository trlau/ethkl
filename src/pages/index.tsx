import Image from 'next/image'
import { Inter } from 'next/font/google'
import React from 'react'
import Card from '../components/Card';
import Button from '../components/Button';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <div>
            <Card>
              This is a testing card.
            </Card>
            <Button>
              Button
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}