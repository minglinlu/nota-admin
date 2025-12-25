import { useParams, Navigate } from 'react-router-dom';
import { Editor as CraftEditor, Frame, Element } from '@craftjs/core';
import { Toolbox } from '../components/editor/Toolbox';
import { Canvas } from '../components/editor/Canvas';
import { Toolbar } from '../components/editor/Toolbar';
import { resolver } from '../lib/resolver';
import mockSites from '../data/mock-sites.json';
import { Container } from '@shared/components';

export function Editor() {
  const { siteId } = useParams();
  const site = mockSites.sites.find((s) => s.id === siteId);

  if (!site) {
    return <Navigate to="/" replace />;
  }

  return (
    <CraftEditor resolver={resolver}>
      <div className="flex flex-col h-screen">
        <Toolbar siteId={site.id} siteName={site.name} />
        
        <div className="flex flex-1 overflow-hidden">
          <Toolbox />
          
          <Canvas>
            <Frame>
              <Element 
                canvas 
                is={Container} 
                padding={20}
                background="transparent"
              >
                <Element is="h1" style={{ padding: '20px', textAlign: 'center' }}>
                  Drag components from the left sidebar to start building
                </Element>
              </Element>
            </Frame>
          </Canvas>
        </div>
      </div>
    </CraftEditor>
  );
}
