import {
  Box,
  Text,
  Heading,
  IconButton,
  Button,
  Drawer,
  DrawerContent,
  DrawerBody,
  DrawerOverlay,
  Input,
  useDisclosure,
} from '@chakra-ui/react'
import { useRef } from 'react'
import { FC } from 'react'
import { useColorScheme } from '../../hooks/useColorScheme'
import { useGetExtensionQuery } from '../../schema'
import { CircleIcon, SettingsIcon, DownChevronIcon } from '../Icons'
import { CurrentExtension } from './CurrentExtension'
import { ExtensionList } from './ExtensionList'

interface ExtensionSwitcherProps {
  isConnected: boolean
  extensionId?: string
}

export const ExtensionSwitcher: FC<ExtensionSwitcherProps> = ({
  isConnected,
  extensionId,
}) => {
  const scheme = useColorScheme()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  const { data } = useGetExtensionQuery({
    variables: { id: extensionId },
    skip: !extensionId,
  })
  const extensionInfo = data?.extension

  return (
    <>
      <Button
        size="xs"
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        border={`1px solid`}
        borderRadius="8px"
        px={2}
        cursor="pointer"
        textAlign="left"
        variant="outline"
        borderColor={scheme.border}
        onClick={onOpen}
        ref={btnRef}
        leftIcon={
          <CircleIcon
            fill={isConnected ? 'green.300' : scheme.border}
            mt="-2px"
          />
        }
      >
        {extensionInfo?.name ?? 'Switch extension'}
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody p={0}>
            {extensionInfo && <CurrentExtension {...extensionInfo} />}
            <ExtensionList />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}