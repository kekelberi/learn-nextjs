import Link from 'next/link'
import Heading from '../../components/Heading'

const Contacts = () => {
  return (
    <div>
      <Heading text={'Contacts in Contacts'} />
      posts in Contacts <br />
      <button>
        <Link href='./'>back</Link>
      </button>
    </div>
  )
}

export default Contacts