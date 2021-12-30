import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'

Amplify.configure(awsconfig)

function App() {
	return <div>hey world</div>
}

export default App
