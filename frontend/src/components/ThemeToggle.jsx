// import { IconButton, useColorModeValue } from "@chakra-ui/react"
import { IconButton } from "@chakra-ui/react"
// import { MoonIcon, SunIcon } from "@chakra-ui/icons"

const ThemeToggle = () => {
    // const { toggleColorMode } = useColorMode()
    return (
        <IconButton
            alignSelf={"center"}
            size={"md"}
            // backgroundColor={useColorModeValue("white", "gray.700")}
            border={"1px"}
            // borderColor={useColorModeValue("gray.200", "gray.700")}
            variant={"ghost"}
            aria-label={"Toggle Color Mode"}
            // onClick={toggleColorMode}
            // icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
        />
    )
}

export default ThemeToggle;