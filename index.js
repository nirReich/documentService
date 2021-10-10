const containerId={id: 'comp-kub7nk5m', type: 'DESKTOP'}
const pageId= {id: 'c1dmp', type: 'DESKTOP'}
const stripId={id: 'comp-kubc70z6', type: 'DESKTOP'}
const childPosition=(parent,child)=> {
    return {
    "x":parent.x+child.x,
    "y":parent.y+child.y
}
}


//--adding container--
documentServices.components.add(pageId,{
    "style": {
        "styleType": "custom",
        "componentClassName": "mobile.core.components.Container",
        "style": {
            "groups": {},
            "properties": {
                "shd": "0px 1px 4px 0px rgba(0,0,0,0.6)",
                "rd": "0px",
                "alpha-brd": "1",
                "alpha-bg": "0",
                "bg": "rgba(255,79,79,1)",
                "brw": "15",
                "brd": "color_15",
                "boxShadowToggleOn-shd": "false"
            },
            "propertiesSource": {
                "shd": "value",
                "rd": "value",
                "alpha-brd": "value",
                "alpha-bg": "value",
                "bg": "value",
                "brw": "value",
                "brd": "theme",
                "boxShadowToggleOn-shd": "value"
            }
        },
        "pageId": "",
        "compId": "",
        "type": "TopLevelStyle",
        "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
        },
        "skin": "wysiwyg.viewer.skins.area.DefaultAreaSkin"
    },
    "activeModes": {},
    "components": [{
        "componentType": "wysiwyg.viewer.components.SiteButton",
        "style": "b1",
        "layout": {
            "width": 142,
            "height": 40,
            "x": 42,
            "y": 165.1666603088379
        },
        "type": "Component",
        "data": {
            "label": "Button",
            "link": null,
            "type": "LinkableButton",
            "metaData": {
                "isHidden": false,
                "isPreset": true,
                "schemaVersion": "1.0"
            }
        },
        "props": {
            "align": "center",
            "margin": 0,
            "type": "ButtonProperties",
            "metaData": {
                "isHidden": false,
                "isPreset": true,
                "schemaVersion": "1.0"
            }
        }
    }],
    "componentType": "mobile.core.components.Container",
    "id": "comp-jawn1liv",
    "layout": {
        "x": 206,
        "fixedPosition": false,
        "y": 17.166671752929688,
        "scale": 1,
        "height": 244,
        "rotationInDegrees": 0,
        "width": 568
    },
    "type": "Container",
    "skin": "wysiwyg.viewer.skins.area.DefaultAreaSkin"
})


//--adding button to desktop--
documentServices.components.add(pageId,{
    "componentType": "wysiwyg.viewer.components.SiteButton",
    "style": "b1",
    "layout": {
        "width": 142,
        "height": 40,
        "x": 697,
        "y": 280
    },
    "type": "Component",
    "data": {
        "label": "Button",
        "link": null,
        "type": "LinkableButton",
        "metaData": {
            "isHidden": false,
            "isPreset": true,
            "schemaVersion": "1.0"
        }
    },
    "props": {
        "align": "center",
        "margin": 0,
        "type": "ButtonProperties",
        "metaData": {
            "isHidden": false,
            "isPreset": true,
            "schemaVersion": "1.0"
        }
    }
})

//-- adding strip --

documentServices.components.add(pageId,{
    "mobileStructure": {
        "design": {
            "type": "MediaContainerDesignData",
            "background": {
                "mediaRef": null,
                "fittingType": "fill",
                "alignType": "center",
                "colorOverlay": "",
                "colorOverlayOpacity": 1,
                "color": "#FFFFFF",
                "colorOpacity": 0,
                "type": "BackgroundMedia",
                "imageOverlay": "",
                "scrollType": "none"
            }
        },
        "style": "strc1",
        "componentType": "wysiwyg.viewer.components.StripColumnsContainer",
        "layout": {
            "anchors": [
                {
                    "topToTop": 410,
                    "originalValue": 864,
                    "targetComponent": "comp-ie1i3lhj",
                    "locked": true,
                    "type": "BOTTOM_TOP",
                    "distance": 10
                }
            ],
            "x": 0,
            "fixedPosition": false,
            "y": 454,
            "scale": 1,
            "height": 400,
            "rotationInDegrees": 0,
            "width": 320
        },
        "type": "Container",
        "props": {
            "frameMargin": 0,
            "fullWidth": true,
            "columnsMargin": 0,
            "siteMargin": 0,
            "rowMargin": 0,
            "type": "StripColumnsContainerProperties"
        }
    },
    "design": {
        "type": "MediaContainerDesignData",
        "background": {
            "mediaRef": null,
            "fittingType": "fill",
            "alignType": "center",
            "colorOverlay": "",
            "colorOverlayOpacity": 1,
            "color": "#FFFFFF",
            "colorOpacity": 0,
            "type": "BackgroundMedia",
            "imageOverlay": "",
            "scrollType": "none"
        }
    },
    "style": {
        "styleType": "system",
        "componentClassName": "wysiwyg.viewer.components.StripContainer",
        "style": {
            "groups": {},
            "properties": {},
            "propertiesSource": {}
        },
        "pageId": "",
        "id": "strc1",
        "compId": "",
        "type": "TopLevelStyle",
        "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false
        },
        "skin": "wysiwyg.viewer.skins.stripContainer.DefaultStripContainer"
    },
    "components": [
        {
            "mobileStructure": {
                "design": {
                    "type": "MediaContainerDesignData",
                    "metaData": {
                        "isPreset": false,
                        "schemaVersion": "1.0",
                        "isHidden": false
                    },
                    "background": {
                        "fittingType": "fill",
                        "alignType": "center",
                        "colorOverlay": "",
                        "colorOverlayOpacity": 0,
                        "color": "#FAFAFA",
                        "colorOpacity": 1,
                        "type": "BackgroundMedia",
                        "metaData": {
                            "isPreset": false,
                            "schemaVersion": "1.0",
                            "isHidden": false
                        },
                        "scrollType": "none"
                    }
                },
                "style": "mc1",
                "componentType": "wysiwyg.viewer.components.Column",
                "layout": {
                    "anchors": [
                        {
                            "topToTop": 0,
                            "originalValue": 0,
                            "targetComponent": "comp-ie011uwm",
                            "locked": true,
                            "type": "BOTTOM_PARENT",
                            "distance": 0
                        }
                    ],
                    "x": 0,
                    "fixedPosition": false,
                    "y": 0,
                    "scale": 1,
                    "height": 400,
                    "rotationInDegrees": 0,
                    "width": 320
                },
                "type": "Container",
                "props": {
                    "type": "ColumnProperties",
                    "alignment": 50
                }
            },
            "design": {
                "type": "MediaContainerDesignData",
                "metaData": {
                    "isPreset": false,
                    "schemaVersion": "1.0",
                    "isHidden": false
                },
                "background": {
                    "type": "BackgroundMedia",
                    "mediaRef": {
                        "type": "Image",
                        "title": "Glass of Milk",
                        "uri": "11062b_2835936bf489427ba698acf73b59a048~mv2.jpg",
                        "description": "search/public/milk/6ae967c404004038b5e84dd0a6ab2b65/38cf7446110341aba0f1aa056078f75b/all/any/all",
                        "width": 3380,
                        "height": 2252,
                        "artist": {
                            "id": "",
                            "name": ""
                        },
                        "opacity": 1,
                        "alt": "Glass of Milk"
                    },
                    "color": "#A2BECE",
                    "alignType": "center",
                    "fittingType": "fill",
                    "colorOverlay": "",
                    "colorOverlayOpacity": 0,
                    "imageOverlay": null,
                    "showOverlayForMediaType": "WixVideo"
                }
            },
            "style": "mc1",
            "components": [],
            "componentType": "wysiwyg.viewer.components.Column",
            "layout": {
                "anchors": [
                    {
                        "topToTop": 0,
                        "originalValue": 0,
                        "targetComponent": "comp-ie011uwm",
                        "locked": true,
                        "type": "BOTTOM_PARENT",
                        "distance": 0
                    }
                ],
                "x": 0,
                "fixedPosition": false,
                "y": 0,
                "scale": 1,
                "height": 400,
                "rotationInDegrees": 0,
                "width": 980
            },
            "type": "Container",
            "props": {
                "type": "ColumnProperties",
                "alignment": 50
            }
        }
    ],
    "componentType": "wysiwyg.viewer.components.StripColumnsContainer",
    "id": "comp-ie011uwm",
    "layout": {
        "x": 345.21604938271605,
        "y": -5,
        "scale": 1,
        "height": 400,
        "rotationInDegrees": 0,
        "width": 980
    },
    "type": "Container",
    "props": {
        "frameMargin": 0,
        "fullWidth": true,
        "columnsMargin": 0,
        "siteMargin": 0,
        "rowMargin": 0,
        "type": "StripColumnsContainerProperties"
    }
})

//-- add column to strip--

documentServices.components.add(stripId,{
    "componentType": "wysiwyg.viewer.components.Column",
    "layout": {
        "x": 0,
        "y": 0,
        "fixedPosition": false,
        "width": 980,
        "height": 400,
        "scale": 1,
        "rotationInDegrees": 0
    },
    "type": "Container",
    "components": [],
    "metaData": {
        "pageId": "c1dmp",
        "sig": "0zb-1629",
        "basedOnSignature": "0zb-1625"
    },
    "parent": "comp-kubc70z6",
    "props": {
        "type": "ColumnProperties",
        "alignment": 50,
        "metaData": {
            "schemaVersion": "1.0",
            "pageId": "c1dmp",
            "sig": "0zb-1599"
        }
    },
    "mobileHints": {
        "type": "MobileHints",
        "recommendedWidth": 320,
        "recommendedHeight": 400,
        "recommendedScale": 1,
        "author": "studio",
        "offsetX": 0,
        "offsetY": 0,
        "offsetOrigin": "leftTop",
        "orderIndex": 0,
        "props": {
            "type": "ColumnProperties",
            "alignment": 50
        },
        "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false,
            "pageId": "c1dmp",
            "sig": "0zb-1605"
        }
    },
    "design": {
        "type": "MediaContainerDesignData",
        "metaData": {
            "isPreset": false,
            "schemaVersion": "1.0",
            "isHidden": false,
            "pageId": "c1dmp",
            "sig": "0zb-1600"
        },
        "background": {
            "type": "BackgroundMedia",
            "mediaRef": {
                "type": "Image",
                "title": "Glass of Milk",
                "uri": "11062b_2835936bf489427ba698acf73b59a048~mv2.jpg",
                "description": "search/public/milk/6ae967c404004038b5e84dd0a6ab2b65/38cf7446110341aba0f1aa056078f75b/all/any/all",
                "width": 3380,
                "height": 2252,
                "artist": {
                    "id": "",
                    "name": ""
                },
                "opacity": 1,
                "alt": "Glass of Milk",
                "metaData": {
                    "isPreset": false,
                    "schemaVersion": "1.0",
                    "isHidden": false,
                    "pageId": "c1dmp",
                    "sig": "0zb-1602"
                }
            },
            "color": "#A2BECE",
            "alignType": "center",
            "fittingType": "fill",
            "colorOverlay": "",
            "colorOverlayOpacity": 0,
            "showOverlayForMediaType": "WixVideo",
            "metaData": {
                "isPreset": false,
                "schemaVersion": "1.0",
                "isHidden": false,
                "pageId": "c1dmp",
                "sig": "0zb-1601"
            }
        }
    },
    "style": "mc1",
    "activeModes": {}
})