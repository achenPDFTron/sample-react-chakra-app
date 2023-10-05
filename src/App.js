import React, { useRef, useEffect } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Button,
  theme,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import WebViewer from '@pdftron/webviewer';

function App() {
  const viewer = useRef(null);
  const wvInstance = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    WebViewer.WebComponent(
      {
        path: '/webviewer/lib',
        initialDoc: '/files/Volleyball_Tournament_Rules.pdf',
      },
      viewer.current,
    ).then((instance) => {
      wvInstance.current = instance;
      const { documentViewer, annotationManager, Annotations } = instance.Core;
    });
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <Box ref={viewer} height="800px">

      </Box>
      <Button onClick={onOpen}>Open Modal</Button>
      {wvInstance.current && <SomeComponent isOpen={isOpen} onClose={onClose} wvDoc={wvInstance.current.Core.documentViewer.getDocument()} />}
    </ChakraProvider>
  );
}

const SomeComponent = ({isOpen, onClose, wvDoc}) => {
  const viewer = useRef(null);
  console.log(wvDoc);
  useEffect(() => {
    WebViewer.WebComponent(
      {
        path: '/webviewer/lib',
        // initialDoc: '/files/Volleyball_Tournament_Rules.pdf',
      },
      viewer.current,
    ).then((instance) => {
      
      const { documentViewer, annotationManager, Annotations } = instance.Core;
      // instance.UI.loadDocument(wvDoc);
    });
  }, []);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box ref={viewer}></Box>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant='ghost'>Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
  </Modal>
  );
};

export default App;
