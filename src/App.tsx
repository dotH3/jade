import { useEffect, useState } from 'react'
import { Selector } from './components/Selector'
import { Input } from './components/Input'
import { Editor } from '@monaco-editor/react'
import { ButtonSuccess } from './components/buttons/ButtonSuccess'
import { sendRequest } from './helpers/send-request'
import { AxiosResponse } from 'axios'
import { Loading } from './components/Loading'
import { methods } from './var'
import './resize.css'


function App() {
  const [resizeKey, setResizeKey] = useState(0);


  const [bodyValue, setBodyValue] = useState('')
  const [url, setUrl] = useState('https://httpbin.org/post')
  const [response, setResponse] = useState<AxiosResponse<any, any>>()
  const [responseInfo, setResponseInfo] = useState<{ time: number }>()
  const [isLoading, setIsLoading] = useState(false)

  const [method, setMethod] = useState('post')

  const handleSendRequest = async () => {
    setIsLoading(true)

    let body;
    try {
      body = bodyValue ? JSON.parse(bodyValue) : undefined;
    } catch (e) {
      console.error('Error parsing body:', e);
      body = undefined;
    }

    console.log(method, typeof body, body);
    const { response, info } = await sendRequest({ method, url, body });

    setIsLoading(false);
    setResponse(response);
    setResponseInfo(info);
  }


  return (
    <div className='md:flex p-3 gap-3 w-full'>
      <div className='w-[50%] resizable-left p-3 rounded-md border-white/25 border flex flex-col gap-3'>
        <div className='flex gap-2'>
          <div className='min-w-[100px] max-w-[100px]'>
            <Selector elements={methods} setValue={setMethod} value={method} />
          </div>
          <Input value={url} setValue={setUrl} />
          <ButtonSuccess text='Send' onClick={handleSendRequest} />
        </div>
        <Editor
          onChange={(value) => { setBodyValue(value as string) }}
          value={bodyValue}
          className='rounded-md h-[500px]'
          theme='vs-dark'
          language='json'
          defaultValue={'{}'}
          options={
            {
              minimap: {
                enabled: false
              },
            }
          }
        />

      </div>
      <div className='w-[50%] resizable-right p-3 rounded-md border-white/25 border flex flex-col gap-2'>

        {isLoading ? <Loading /> :
          (<>
            <p>
              {response && (
                <div className='flex gap-3'>
                  <div>
                    Status <span className={response.status >= 200 && response.status <= 299 ? 'text-success' : 'text-error'}>{response?.status}</span>
                  </div>
                  <div>
                    <span className='text-secondary'>{responseInfo?.time}ms</span>
                  </div>

                </div>)}
            </p>
            <Editor
              value={response && JSON.stringify(response.data, null, 2) || response?.data}
              className={'rounded-full h-full'}
              theme='vs-dark'
              language={typeof response?.data === 'object' ? 'json' : 'plaintext'}
              options={
                {
                  minimap: {
                    enabled: false
                  },
                  readOnly: true,
                  lineNumbers: 'off'
                }
              }
            />

          </>
          )
        }
      </div>
    </div >
  )
}

export default App
