import User from '../components/user'

export default function UserList({users}) {
  return (
      <>
        <div>List of Users</div>
        {
            users.map(user => (
                <div key={user.id}>
                    <User user={user} />
                </div>
            ))
        }
    </>
  )
}

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()

    return {
        props: {
            users: data
        }
    }
}
