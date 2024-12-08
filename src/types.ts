export type UseWhisperConfig = {
  apiKey?: string
  autoStart?: boolean
  autoTranscribe?: boolean
  mode?: 'transcriptions' | 'translations'
  nonStop?: boolean
  removeSilence?: boolean
  stopTimeout?: number
  streaming?: boolean
  timeSlice?: number
  whisperConfig?: WhisperApiConfig
  onDataAvailable?: (blob: Blob) => void
  onTranscribe?: (blob: Blob) => Promise<UseWhisperTranscript>
  whisperApiEndpoints?:WhisperAPIEndpointsConfig
}

export type WhisperAPIEndpointsConfig = {
  transcriptions?: string
  translations?: string
}

export type UseWhisperTimeout = {
  stop?: NodeJS.Timeout
}

export type UseWhisperTranscript = {
  blob?: Blob
  text?: string
}

export type UseWhisperReturn = {
  recording: boolean
  speaking: boolean
  transcribing: boolean
  transcript: UseWhisperTranscript
  pauseRecording: () => Promise<void>
  startRecording: () => Promise<void>
  stopRecording: () => Promise<void>
}

export type UseWhisperHook = (config?: UseWhisperConfig) => UseWhisperReturn

export type WhisperApiConfig = {
  model?: 'whisper-1' | string
  prompt?: string
  response_format?: 'json' | 'text' | 'srt' | 'verbose_json' | 'vtt'
  temperature?: number
  language?: string
}

declare const UNDEFINED_VOID_ONLY: unique symbol

export type Destructor = () => void | { [UNDEFINED_VOID_ONLY]: never }