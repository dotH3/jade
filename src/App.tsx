import { useState } from 'react'
import { Selector } from './components/Selector'
import { Input } from './components/Input'
import { Editor } from '@monaco-editor/react'
import { ButtonSuccess } from './components/buttons/ButtonSuccess'
import { sendRequest } from './helpers/send-request'

const defaultBody = {
  " ": " "
}

function App() {
  const [bodyValue, setBodyValue] = useState('')
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/ditto')
  const [responseValue, setResponseValue] = useState('')

  const handleSendRequest = async () => {
    const response = await sendRequest({
      method: 'get', url
    })
    console.log(response.status);
    setResponseValue(JSON.stringify(response.data, null, 2))

  }

  return (
    <div className='md:grid grid-cols-2 p-2 gap-2'>
      <div className='p-3 rounded-md border-white/25 border flex flex-col gap-3'>
        <div className='flex gap-2'>
          <div className='min-w-[100px] max-w-[100px]'>
            <Selector />
          </div>
          <Input value={url} setValue={setUrl} placeholder='https://pokeapi.co/api/v2/pokemon/ditto' />
        </div>
        <Editor
          onChange={(value) => { setBodyValue(value as string) }}
          value={bodyValue}
          className='rounded-md'
          theme='vs-dark'
          height={500}
          language='json'
          defaultValue={JSON.stringify(defaultBody, null, 2)}
          options={
            {
              minimap: {
                enabled: false
              },
            }
          }
        />
        <ButtonSuccess onClick={handleSendRequest} />
      </div>
      <div className='p-3 rounded-md border-white/25 border min-h-[300px]'>
        <Editor
          value={responseValue}
          className='rounded-md'
          theme='vs-dark'
          // height={500}
          language='json'
          options={
            {
              minimap: {
                enabled: false
              },
              readOnly: true,
              lineNumbers: false
            }
          }
        />
      </div>
    </div>
  )
}

export default App
