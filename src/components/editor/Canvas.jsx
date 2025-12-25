import { useEditor } from '@craftjs/core';

export function Canvas({ children }) {
  const { connectors } = useEditor();

  return (
    <div className="flex-1 bg-gray-100 p-8 overflow-auto">
      <div
        ref={(ref) => ref && connectors.select(connectors.hover(ref, ''), 'ROOT')}
        className="bg-white min-h-[600px] rounded-lg shadow-lg mx-auto max-w-6xl"
        style={{
          minHeight: '600px'
        }}
      >
        {children}
      </div>
    </div>
  );
}
