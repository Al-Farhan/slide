import { InstagramDuoToneBlue, SalesForceDuoToneBlue } from "@/icons"

type Props = {
    title: string
    icon: React.ReactNode
    description: string
    strategy: 'INSTAGRAM' | 'CRM'
}

export const INTEGRATION_CARDS: Props[] = [
    {
        title: 'Connect Instagram',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis tenetur quas rem, omnis incidunt inventore.',
        icon: <InstagramDuoToneBlue />,
        strategy: 'INSTAGRAM',
    },
    {
        title: 'Connect Salesforce',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis tenetur quas rem, omnis incidunt inventore.',
        icon: <SalesForceDuoToneBlue />,
        strategy: 'CRM',
    }
]

