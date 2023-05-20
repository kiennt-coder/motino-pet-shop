import React, {useState, useEffect} from 'react';
import {ArrowRightOutlined, FacebookFilled, InstagramOutlined, TwitterFilled, YoutubeFilled} from '../icon'
import {Row, Col} from '../grid'
import {NavWrapper, NavStyled, NavItemStyled, NavDropdownWrapper, NavListWrapper, 
    NavListHeader, NavListBody, NavHeaderLink, NavItemDefaultStyled, NavOverlay,
    NavSearch, NavSocials, NavListDefault, CloseButton} from './styled'
import BannerNavDropdownImg from '../../assets/images/banner-nav-dropdown.png'
import {Text} from '../typography'
import {InputSearch} from '../input'
import Tooltip from '../tooltip'

function Navigate({isMenuFooter=false, className, isMenuActive, onClose, ...props}) {
    const [isNavDropdownHidden, setIsNavDropdownHidden] = useState(false)
    const [menus, setMenus] = useState([
        {
            id: 1,
            label: "Home",
            to: "/",
            children: false,
            totalChildrens: 0,
        },
        {
            id: 2,
            label: "Cagegory",
            to: "/category",
            children: true,
            totalChildrens: 3,
        },
        {
            id: 3,
            label: "About",
            to: "/about",
            children: false,
            totalChildrens: 0,
        },
        {
            id: 4,
            label: "Contact",
            to: "/contact",
            children: false,
            totalChildrens: 0,
        },
    ])

    useEffect(() => {
        const removeHiddenClass = setTimeout(() => {
            isNavDropdownHidden && setIsNavDropdownHidden(false)
        }, 1000)
        
        return () => {
            clearTimeout(removeHiddenClass)
        }
    }, [isNavDropdownHidden])

    useEffect(() => {
        let newMenus = [...menus]
        newMenus = newMenus.map(item => {
            let newItem = {...item}
            newItem.children = isMenuFooter ? false : newItem.totalChildrens > 0
            return newItem
        })
        setMenus(newMenus)

        // eslint-disable-next-line
    }, [isMenuFooter])

    const dropdownMenu = [
        {
            id: 1,
            label: "Popular",
            slug: "popular",
            isLarge: true,
            children: [
                {
                    id: 4,
                    label: "Yorkshine Terrier",
                    slug: "yorkshine-terrier",
                    children: null,
                },
                {
                    id: 5,
                    label: "Samoyed",
                    slug: "samoyed",
                    children: null,
                },
                {
                    id: 6,
                    label: "Pug",
                    slug: "pug",
                    children: null,
                },
                {
                    id: 7,
                    label: "Labrador",
                    slug: "labrador",
                    children: null,
                },
                {
                    id: 8,
                    label: "Cocker Spaniel",
                    slug: "cocker-spaniel",
                    children: null,
                },
                {
                    id: 9,
                    label: "Tosa",
                    slug: "tosa",
                    children: null,
                },
                {
                    id: 10,
                    label: "Jack Russell Terrier",
                    slug: "jack-russell-terrier",
                    children: null,
                },

                {
                    id: 11,
                    label: "Dachshund",
                    slug: "dachshund",
                    children: null,
                },
                {
                    id: 12,
                    label: "Beagle",
                    slug: "beagle",
                    children: null,
                },
                {
                    id: 13,
                    label: "French Bulldog",
                    slug: "french-bulldog",
                    children: null,
                },
                {
                    id: 14,
                    label: "Husky",
                    slug: "husky",
                    children: null,
                },
                {
                    id: 15,
                    label: "Chihuahua",
                    slug: "chihuahua",
                    children: null,
                },
            ],
        },
        {
            id: 2,
            label: "Large Dog",
            slug: "large-dog",
            isLarge: false,
            children: [
                {
                    id: 16,
                    label: "Akita",
                    slug: "akita",
                    children: null,
                },
                {
                    id: 17,
                    label: "Alaskan Malamute",
                    slug: "alaskan-malamute",
                    children: null,
                },
                {
                    id: 18,
                    label: "Bernese Moutain",
                    slug: "bernese-moutain",
                    children: null,
                },
                {
                    id: 19,
                    label: "Bloodhound",
                    slug: "bloodhound",
                    children: null,
                },
                {
                    id: 20,
                    label: "Bullmastiff",
                    slug: "bullmastiff",
                    children: null,
                },
                {
                    id: 21,
                    label: "Cane Corno",
                    slug: "cane-corno",
                    children: null,
                },
            ],
        },
        {
            id: 3,
            label: "Small Dog",
            slug: "small-dog",
            isLarge: false,
            children: [
                {
                    id: 22,
                    label: "Beagle",
                    slug: "beagle",
                    children: null,
                },
                {
                    id: 23,
                    label: "Boston Terrier",
                    slug: "boston-terrier",
                    children: null,
                },
                {
                    id: 24,
                    label: "Calm Terrier",
                    slug: "calm-terrier",
                    children: null,
                },
                {
                    id: 25,
                    label: "Chihuahua",
                    slug: "chihuahua",
                    children: null,
                },
                {
                    id: 26,
                    label: "Cocker Spaniel",
                    slug: "cocker-spaniel",
                    children: null,
                },
                {
                    id: 27,
                    label: "Dachshund",
                    slug: "dachshund",
                    children: null,
                },
            ],
        }
    ]

    const handleNavDropdownItemClick = () => {
        setIsNavDropdownHidden(true)
    }

    const handleRenderDropdownMenu = (list) => {
        return list.map(item => (
            <Col span={item.isLarge ? 8 : 4} key={item.id}>
                <NavListWrapper>
                    <NavListHeader>
                        <NavHeaderLink to={item.slug} className="font-weight-bold body--xl text-ellipsis">
                            {item.label}
                        </NavHeaderLink>
                        <ArrowRightOutlined color="primary-color" size={0.8}/>
                    </NavListHeader>
                    <NavListBody className={item.isLarge && "nav-dropdown__list-body--large"}>
                        <NavStyled className="nav-dropdown__list-nav">
                        {
                            item.children && item.children.map(child => (
                                <NavItemStyled key={child.id} className="nav-dropdown__list-item" to={`${item.slug}/${child.slug}`}>
                                    <Text tagName="span" className="font-weight-normal body--md">
                                        {child.label}
                                    </Text>
                                </NavItemStyled>
                            ))
                        }
                        </NavStyled>
                    </NavListBody>
                </NavListWrapper>
            </Col>
        ))
    }

    const handleCloseMenu = () => {
        onClose && onClose(false)
    }

    return (
        <>
            {menus && <NavWrapper className={isMenuActive ? `${className} active` : className}>
                <NavSearch className="nav__search">
                    <InputSearch className="nav__input-search" onClick={handleCloseMenu} />
                </NavSearch>
                <NavStyled isMenuFooter={isMenuFooter}>
                    {
                        menus.map(menuItem => (
                            menuItem.children ? (
                                <NavItemDefaultStyled key={menuItem.id} to={menuItem.to} onClick={handleNavDropdownItemClick}>
                                    <Text tagName="span" className="font-weight-bold body--xl nav-dropdown__item">
                                    {menuItem.label}
                                    </Text>
                                    {
                                        <NavDropdownWrapper className={`nav__dropdown ${isNavDropdownHidden ? "hidden" : ""}`}>
                                            <Row>
                                                {handleRenderDropdownMenu(dropdownMenu)}
                                                <Col span={8}>
                                                    <img className="image-fluid" src={BannerNavDropdownImg} alt="" />
                                                </Col>
                                            </Row>
                                        </NavDropdownWrapper>
                                    }
                                </NavItemDefaultStyled>
                            ) : 
                            (
                                <NavItemStyled onClick={handleCloseMenu} key={menuItem.id} to={menuItem.to}>
                                    {
                                        isMenuFooter ? (
                                            <Text tagName="span" className="body--xl font-weight-normal">
                                                {menuItem.label}
                                            </Text>
                                        ) :
                                        (
                                            <Text tagName="span" className="font-weight-bold body--xl">
                                                {menuItem.label}
                                            </Text>
                                        )
                                    }
                                    
                                </NavItemStyled>
                            )
                        ))
                    }
                </NavStyled>
                <NavSocials className='nav__socials'>
                    <NavListDefault href="/">
                        <Tooltip title='Facebook' placement='right'>
                            <FacebookFilled color="primary-color" />
                        </Tooltip>
                        
                    </NavListDefault>
                    <NavListDefault href="/">
                        <Tooltip title='Twitter'>
                            <TwitterFilled color="primary-color" />
                        </Tooltip>
                        
                    </NavListDefault>
                    <NavListDefault href="/">
                        <Tooltip title='Instagram'>
                            <InstagramOutlined color="primary-color" />
                        </Tooltip>
                        
                    </NavListDefault>
                    <NavListDefault href="/">
                        <Tooltip title='Youtube'>
                            <YoutubeFilled color="primary-color" />
                        </Tooltip>
                        
                    </NavListDefault>
                </NavSocials>
            </NavWrapper>}
            <CloseButton onClick={handleCloseMenu} className="nav__close-icon" />
            <NavOverlay onClick={handleCloseMenu} className='nav__overlay' />
        </>
    );
}

export default Navigate;