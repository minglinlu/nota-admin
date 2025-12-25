import { useEditor, Element } from '@craftjs/core';
import {
  Container,
  Text,
  Button,
  Image,
  Grid,
  Flex,
  Columns,
  Menu,
  MenuItem,
  Hours
} from '@shared/components';

export function Toolbox() {
  const { connectors } = useEditor();

  const components = [
    {
      name: 'Basic',
      items: [
        { name: 'Container', icon: '📦', component: Container },
        { name: 'Text', icon: '📝', component: Text },
        { name: 'Button', icon: '🔘', component: Button },
        { name: 'Image', icon: '🖼️', component: Image }
      ]
    },
    {
      name: 'Layout',
      items: [
        { name: 'Flex', icon: '↔️', component: Flex },
        { name: 'Grid', icon: '▦', component: Grid },
        { name: 'Columns', icon: '|||', component: Columns }
      ]
    },
    {
      name: 'F&B',
      items: [
        { name: 'Menu', icon: '📋', component: Menu },
        { name: 'Menu Item', icon: '🍽️', component: MenuItem },
        { name: 'Hours', icon: '🕐', component: Hours }
      ]
    }
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 p-4 overflow-y-auto h-full">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Components</h2>
      
      {components.map((category) => (
        <div key={category.name} className="mb-6">
          <h3 className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
            {category.name}
          </h3>
          <div className="space-y-2">
            {category.items.map((item) => (
              <div
                key={item.name}
                ref={(ref) => {
                  if (ref) {
                    connectors.create(ref, <Element canvas is={item.component} />);
                  }
                }}
                className="flex items-center gap-2 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg cursor-move transition-colors border border-gray-200"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-sm font-medium text-gray-700">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-xs text-blue-800">
          💡 <strong>Tip:</strong> Drag and drop components onto the canvas to build your page
        </p>
      </div>
    </div>
  );
}
