import { useEditor } from '@craftjs/core';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { encodeCraftState } from '@shared/lib/utils/base64';

export function Toolbar({ siteId, siteName }) {
  const { actions, query } = useEditor();
  const navigate = useNavigate();
  const [showExport, setShowExport] = useState(false);
  const [exportedCode, setExportedCode] = useState('');
  const [copied, setCopied] = useState(false);

  const handleSave = () => {
    const json = query.serialize();
    const jsonString = JSON.stringify(json);
    
    // Save to localStorage for this MVP
    localStorage.setItem(`site-${siteId}`, jsonString);
    
    alert('Site saved successfully!');
  };

  const handleLoad = () => {
    const saved = localStorage.getItem(`site-${siteId}`);
    if (saved) {
      const json = JSON.parse(saved);
      actions.deserialize(json);
      alert('Site loaded successfully!');
    } else {
      alert('No saved state found for this site.');
    }
  };

  const handleExport = () => {
    const json = query.serialize();
    const jsonString = JSON.stringify(json, null, 2);
    const base64String = encodeCraftState(jsonString);
    
    setExportedCode(base64String);
    setShowExport(true);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(exportedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClear = () => {
    if (confirm('Are you sure you want to clear the canvas?')) {
      actions.clearEvents();
      window.location.reload();
    }
  };

  return (
    <>
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/')}
            className="text-gray-600 hover:text-gray-800 font-medium"
          >
            ← Back
          </button>
          <div className="border-l border-gray-300 h-6" />
          <h1 className="text-xl font-bold text-gray-800">
            {siteName}
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleLoad}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
          >
            Load
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
          >
            Save
          </button>
          <button
            onClick={handleExport}
            className="px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-md transition-colors"
          >
            Export Base64
          </button>
          <button
            onClick={handleClear}
            className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Export Modal */}
      {showExport && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[80vh] overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800">Exported Base64 Craft State</h2>
              <p className="text-gray-600 mt-1">
                Copy this base64 string and paste it into your storefront's mock-tenants.json
              </p>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-96">
              <pre className="bg-gray-50 p-4 rounded-md text-xs font-mono overflow-x-auto border border-gray-200">
                {exportedCode}
              </pre>
            </div>

            <div className="p-6 border-t border-gray-200 flex gap-3 justify-end">
              <button
                onClick={() => setShowExport(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
              >
                Close
              </button>
              <button
                onClick={handleCopy}
                className="px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-md transition-colors"
              >
                {copied ? '✓ Copied!' : 'Copy to Clipboard'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
