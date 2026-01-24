(function() {
    let inspectorEnabled = false;
    let styleElement = null;
    const buttons = [];

    function generateSelector(element) {
        if (element.id) {
            return '#' + element.id;
        }
        let selector = element.tagName.toLowerCase();
        if (element.className) {
            selector += '.' + element.className.trim().replace(/\s+/g, '.');
        }
        return selector;
    }

    var zoomHandler = null;

    function getNestingDepth(el) {
        var depth = 0;
        var parent = el.parentElement;
        while (parent) {
            if (parent.classList && parent.classList.contains('buildflowz-outline')) {
                depth++;
            }
            parent = parent.parentElement;
        }
        return depth;
    }

    function depthColor(depth) {
        var fade = Math.min(220, depth * 40);
        return 'rgb(255,' + fade + ',' + fade + ')';
    }

    function updateButtonScales() {
        var scale = window.visualViewport ? window.visualViewport.scale : 1;
        var inverseScale = 1 / scale;
        buttons.forEach(function(btn) {
            btn.style.transform = 'translateY(-50%) scale(' + inverseScale + ')';
        });
    }

    function flashElement(div) {
        var color = div.style.outline ? div.style.outline.match(/rgb\([^)]+\)/)[0] : '#FF0000';
        div.style.transition = 'box-shadow 0.15s ease-in';
        div.style.boxShadow = 'inset 0 0 0 3px ' + color + ', 0 0 12px ' + color;
        setTimeout(function() {
            div.style.transition = 'box-shadow 0.4s ease-out';
            div.style.boxShadow = '';
        }, 250);
    }

    function enableInspector() {
        if (inspectorEnabled) return;
        inspectorEnabled = true;

        styleElement = document.createElement('style');
        styleElement.textContent = '\
        .buildflowz-outline {\
            position: relative;\
        }\
        .buildflowz-button {\
            position: absolute;\
            top: 0;\
            transform-origin: left bottom;\
            color: white;\
            padding: 4px 9px;\
            font-size: 13px;\
            font-weight: bold;\
            border: none;\
            border-radius: 4px;\
            z-index: 9999;\
            line-height: 1;\
            pointer-events: auto;\
            cursor: pointer;\
        }';
        document.head.appendChild(styleElement);

        // Calculate max nesting depth across all divs
        var divs = document.querySelectorAll('div');
        var maxDepth = 0;
        divs.forEach(function(div) {
            div.classList.add('buildflowz-outline');
            var d = getNestingDepth(div);
            if (d > maxDepth) maxDepth = d;
        });

        divs.forEach(function(div, index) {
            var depth = getNestingDepth(div);
            var color = depthColor(depth);
            div.style.setProperty('outline', '1px solid ' + color, 'important');
            div.style.setProperty('outline-offset', '-' + (depth * 2) + 'px', 'important');

            // Position button proportionally: spread from 0% to 70% based on depth/maxDepth
            var leftPercent = maxDepth > 0 ? (depth / maxDepth) * 85 : 0;

            var button = document.createElement('button');
            button.textContent = index + 1;
            button.classList.add('buildflowz-button');
            button.setAttribute('data-depth', depth);
            button.style.left = leftPercent + '%';
            button.style.background = color;
            button.style.color = depth > 3 ? '#333' : '#fff';
            div.appendChild(button);
            buttons.push(button);

            button.addEventListener('click', function(event) {
                event.stopPropagation();
                flashElement(div);
                var selector = generateSelector(div);
                navigator.clipboard.writeText(selector).then(function() {
                    console.log('Selector copied: ', selector);
                });
            });
            button.addEventListener('touchend', function(event) {
                event.stopPropagation();
                flashElement(div);
                var selector = generateSelector(div);
                navigator.clipboard.writeText(selector).then(function() {
                    console.log('Selector copied: ', selector);
                });
            });
        });

        updateButtonScales();
        if (window.visualViewport) {
            zoomHandler = updateButtonScales;
            window.visualViewport.addEventListener('resize', zoomHandler);
        }
    }

    function disableInspector() {
        if (!inspectorEnabled) return;

        if (window.visualViewport && zoomHandler) {
            window.visualViewport.removeEventListener('resize', zoomHandler);
            zoomHandler = null;
        }

        if (styleElement && styleElement.parentNode === document.head) {
            document.head.removeChild(styleElement);
        }

        buttons.forEach(function(button) {
            if (button.parentNode) {
                button.parentNode.removeChild(button);
            }
        });
        buttons.length = 0;

        document.querySelectorAll('.buildflowz-outline').forEach(function(div) {
            div.classList.remove('buildflowz-outline');
            div.style.removeProperty('outline');
            div.style.removeProperty('outline-offset');
            div.style.removeProperty('box-shadow');
            div.style.removeProperty('transition');
        });

        inspectorEnabled = false;
    }

    function toggleInspector() {
        if (inspectorEnabled) {
            disableInspector();
        } else {
            enableInspector();
        }
    }

    function initToggleButton() {
        var toggleButton = document.createElement('button');
        toggleButton.id = 'buildflowz-inspector-toggle';
        toggleButton.textContent = '\uD83D\uDD0D';
        toggleButton.title = 'Toggle Web Inspector';
        toggleButton.style.cssText = 'position:fixed;top:10px;right:10px;z-index:10000;background:#333;color:#fff;border:none;border-radius:50%;width:40px;height:40px;font-size:20px;cursor:pointer;box-shadow:0 2px 5px rgba(0,0,0,0.3);';
        toggleButton.addEventListener('click', toggleInspector);
        document.body.appendChild(toggleButton);
    }

    if (!window.__buildflowzInspectorLoaded) {
        window.__buildflowzInspectorLoaded = true;
        initToggleButton();
    }
})();