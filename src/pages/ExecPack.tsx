import { useState } from 'react'
import { Brain } from 'lucide-react'
import DocumentCard from '../components/exec-pack/DocumentCard'
import DocumentPreview from '../components/exec-pack/DocumentPreview'
import { execDocuments, type DocumentStatus } from '../data/execPack'

export default function ExecPack() {
  const [documents, setDocuments] = useState(execDocuments)
  const [previewId, setPreviewId] = useState('board-paper')
  const [generatingAll, setGeneratingAll] = useState(false)

  const previewDoc = documents.find((d) => d.id === previewId) ?? documents[1]

  const handleGenerateAll = () => {
    setGeneratingAll(true)
    setDocuments((prev) =>
      prev.map((doc) =>
        doc.status === 'not_started'
          ? { ...doc, status: 'generating' as DocumentStatus }
          : doc,
      ),
    )

    setTimeout(() => {
      setDocuments((prev) =>
        prev.map((doc) =>
          doc.status === 'generating'
            ? { ...doc, status: 'generated' as DocumentStatus }
            : doc,
        ),
      )
      setGeneratingAll(false)
    }, 2500)
  }

  return (
    <div className="space-y-6 p-6">
      {/* Page header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="font-display text-[28px] font-bold text-white">
            Executive Pack Generator
          </h1>
          <p className="mt-1 text-sm text-slate-400">
            AI-generated board-ready outputs — review, edit, and export in minutes
          </p>
        </div>
        <button
          type="button"
          onClick={handleGenerateAll}
          disabled={generatingAll}
          className="flex items-center gap-2 rounded-lg bg-smartco-500 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-smartco-600 disabled:opacity-80"
        >
          {generatingAll ? (
            <Brain size={18} className="animate-spin" />
          ) : (
            <Brain size={18} />
          )}
          Generate All Outputs
        </button>
      </div>

      {/* Document grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {documents.map((doc) => (
          <DocumentCard
            key={doc.id}
            document={doc}
            onPreview={setPreviewId}
          />
        ))}
      </div>

      {/* Preview panel */}
      <DocumentPreview title={previewDoc.title} />
    </div>
  )
}
