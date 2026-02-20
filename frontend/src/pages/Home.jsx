import StatusContainer from '../components/StatusContainer'

const Home = () => {   
   return <>
      <h1>Home Page</h1>
      <div className="container">
         <div className="row">
            <StatusContainer style='bg-danger-subtle' title='Todo'/>
            <StatusContainer style='bg-warning-subtle' title='Doing'/>
            <StatusContainer style='bg-success-subtle' title='Done'/>
         </div>
      </div>
   </>
}

export default Home