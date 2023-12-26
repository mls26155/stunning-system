import Button from '@/components/Button'
import Card from '@/components/Card'
import ColorPicker from '@/components/ColorPicker'
import Counter from '@/components/Counter'
import MyComponent from '@/components/MyComponent'
import OnChangeComponent from '@/components/OnChangeComponent'
import Student from '@/components/Student'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Card name="Yuya Uzu" tagline="Web Developer" imageSource="/yuya.jpeg"/>
      <Card name="Mikey Schro" tagline="Full Stack Engineer" imageSource='/next.svg'/>
      <Card name="James Schro" tagline="Computer Engineering Student" imageSource='/vercel.svg'/>
      <Card name="Gyarados" tagline="Once it appears, it goes on a rampage. It remains enraged until it demolishes everything around it." imageSource="/gyrados.png"/>
      <Card />
      <Button />
      <Student name="Spongebob" age={30} isStudent={true}/>
      <Student name="Patrick" age={42} isStudent={false} />
      <Student name="Squidward" age={50} isStudent={false} />
      <Student name="Sandy" age={27} isStudent={true} />
      <Student />
      <MyComponent />
      <Counter />
      <OnChangeComponent />
      <ColorPicker />
    </>
  )
}
