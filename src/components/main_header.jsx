import React, { useEffect } from "react";
import { 
    Header, 
    Container, 
    Burger, 
    Group, 
    Paper, Text,
    createStyles,
    Transition, MantineProvider,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";


const useStyles = createStyles((theme)  => ({
    root: {
        position: 'relative',
        zIndex: 1,
        marginBottom: theme.spacing.xl * 4,
        borderBottom: `0px solid`,
    
        '@media (max-width: 768px)': {
            marginBottom: theme.spacing.xl * 2,
        },

        '@media (max-width: 500px)': {
            marginBottom: theme.spacing.xl * 0,
        },
    },

    dropdown: {
        position: 'absolute',
        zIndex: 0,
        left: 0, right: 0,
        top: 0,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderTopWidth: 0,
        overflow: 'hidden',

        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    header: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    links: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    burger: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    hide: {
        '@media (max-width: 309px)': {
            display: 'none',
        },
    },

    link: {
        fontFamily: '"Graycliff CF", sans-serif',
        display:'block',
        lineHeight: 1,
        padding: '8px 12px',
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.dark[9],
        fontSize: 15,
        fontWeight: 700,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1],
            textDecoration: 'none',
        },

        '&:focus': {
            outline: 'none',
        },

        [theme.fn.smallerThan('sm')]: {
            fontWeight: 400,
            borderRadius: 0,
            padding: theme.spacing.md,
        },
    },

    title: {
        fontWeight: 700,
        fontSize: 26,
        fontFamily: '"Graycliff CF", sans-serif',
        color: theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.pink[7],
    },

    linkActive: {
        '&, &:hover': {
            background: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
        },
    },
})) 

function MainHeader() {
    const { classes, cx} = useStyles();
    const [opened, {toggle, close}] = useDisclosure(false);
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : null;

    useEffect(() => {
        const updatePath = () => {
            if (!typeof window !== "undefined") {
                currentPath = window.location.pathname;
            }
        };
        window.addEventListener('popstate',updatePath);
        return () => {
            window.removeEventListener('popstate',updatePath);
        };
    }, []);

    return (
        <Header height={70} className={classes.root}>
            <Container className={classes.header}>
                <Group spacing="xl">
                    <Text className={classes.title}>
                        picsWave
                    </Text>
                    <div className={classes.burger}>
                        <div className={classes.hide}>
                            {/*  */}
                        </div>
                    </div>
                </Group>

        <Group spacing={5} className={classes.links}>
            <Link href="/">
                <a
                  key="Home"
                  className={cx(classes.link, currentPath == "/" ? classes.linkActive: '')}
                  onClick={(event) => {
                    close();
                  }}
                  >
                    Home
                  </a>
            </Link>
            
            <Link href="/services">
                <a 
                  key="Services"
                  className={cx(classes.link, currentPath == "/services" ? classes.linkActive: '')}
                  onClick = {(event) => {
                    close();
                  }}
                  >
                    Services
                  </a>
            </Link>

        </Group>









            </Container>
        </Header>
    );




}

export default MainHeader;