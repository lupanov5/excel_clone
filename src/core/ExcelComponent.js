import {DomListener} from './DomListener'

export class ExcelComponent extends DomListener {
    // Возвращает шаблон компонента
    constructor($root, options = []) {
        super($root, options.listeners)
    }
    toHTML() {
        return ''
    }

    init() {
        this.initDOMListeners()
    }

    destroy() {
        this.removeDOMListeners()
    }
}

