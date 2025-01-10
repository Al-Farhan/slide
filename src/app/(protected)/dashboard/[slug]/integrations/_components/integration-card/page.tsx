import { Button } from '@/components/ui/button'
import React from 'react'

type Props = {
    title: string
    description: string
    icon: React.ReactNode
    strategy: 'INSTAGRAM' | 'CRM'
}

const IntegrationCard = ({ description, icon, strategy, title }: Props) => {
  // TODO: wire up fetching data and ge the integrations from the db

  return (
    <div className="border-2 border-[#3352CC] rounded-2xl gap-x-5 p-5 flex items-center">
      {icon}
      <div className="flex flex-col flex-1">
        <h3 className="text-xl">{title}</h3>
        <p className="text-[#9D9D9D] text-base w-full md:w-10/12 xl:w-8/12 2xl:w-6/12">{description}</p>
      </div>
      <Button
        // onClick={onInstaOAuth}
        // disabled={integrated?.name === strategy}
        className="bg-gradient-to-br from-[#3352CC] to-[#1C2D70] text-white rounded-full text-lg font-medium hover:opacity-70 transition duration-100"
      >
        {/* {integrated ? 'Connected' : 'Connect'} */}
        Connect
      </Button>
    </div>
  )
}

export default IntegrationCard