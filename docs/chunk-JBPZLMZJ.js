import {
  q as Ai,
  xa as At,
  S as Ce,
  fa as Ct,
  z as Ee,
  pa as Et,
  s as Fi,
  ya as Ft,
  va as Gi,
  Q as Li,
  P as Ni,
  Ba as Nt,
  p as Oi,
  ua as Ot,
  W as Pe,
  qa as Pt,
  M as Ri,
  Aa as Rt,
  b as Ti,
  ra as Tt,
  U as Ue,
  la as Vi,
  ta as W,
  Ea as Wi,
  ma as Zi,
  N as _t,
  aa as ft,
  O as gt,
  T as ji,
  j as mt,
  w as pt,
  na as q,
  B as ri,
  l as ut,
  ba as vt,
  ka as zi,
} from './chunk-2L2Z4DWI.js'
import {
  i as $,
  c as $i,
  j as Ae,
  n as Ht,
  e as Ke,
  k as Lt,
  h as Oe,
  d as Qe,
  g as St,
  l as jt,
  b as kt,
  a as oi,
  o as qi,
  f as yt,
} from './chunk-7TETGEXG.js'
import {
  W as $e,
  ca as A,
  Zb as B,
  t as Be,
  Qb as De,
  ac as Di,
  ha as E,
  xc as Ei,
  xa as F,
  ka as G,
  zb as Ge,
  da as H,
  p as He,
  ga as I,
  Yb as Ie,
  bc as Ii,
  na as J,
  m as Jt,
  Hb as L,
  qb as M,
  ea as Me,
  Tb as Mi,
  a as N,
  Bc as Pi,
  C as Q,
  Db as R,
  db as Si,
  qa as T,
  lb as Ve,
  Vb as We,
  $ as X,
  b as Xt,
  mc as Ye,
  fb as Z,
  yb as Ze,
  Za as _,
  I as ae,
  Nb as ai,
  X as at,
  d as bi,
  Eb as ce,
  Ob as ct,
  Cb as d,
  zc as de,
  _b as dt,
  rb as ee,
  K as ei,
  Ub as f,
  ib as fe,
  ya as g,
  hb as ge,
  Fb as he,
  Pb as ht,
  Rb as ie,
  Ga as ii,
  j,
  Mb as k,
  ia as ki,
  Ja as le,
  ub as lt,
  Bb as m,
  Cc as me,
  Sb as ne,
  mb as ni,
  e as nt,
  fa as oe,
  Va as ot,
  Ab as qe,
  V as re,
  Ha as rt,
  sc as se,
  Ib as si,
  y as st,
  xb as te,
  ua as ti,
  Ya as v,
  Wb as ve,
  sb as w,
  oa as we,
  $b as wi,
  Kb as x,
  B as xe,
  kb as xi,
  la as yi,
  $a as ze,
} from './chunk-DIL36AF2.js'
import { f as Fe, h as Mt, g as ci, c as li, d as xt } from './chunk-IX6G3U3V.js'
import {
  m as $t,
  b as Ji,
  a as Xi,
  g as an,
  k as cn,
  c as en,
  l as hi,
  j as ln,
  e as nn,
  i as on,
  h as rn,
  f as sn,
  d as tn,
} from './chunk-LIKNIBNI.js'
import { j as Bi, l as Bt } from './chunk-MZGUTSE4.js'
import {
  h as Dt,
  b as Hi,
  i as It,
  m as Ki,
  l as Qi,
  c as Te,
  k as Ui,
  j as Yi,
  a as bt,
  d as wt,
} from './chunk-T6GI6B4C.js'
var Zn = ['mat-menu-item', '']
function Gn(a, s) {
  a & 1 && (ki(), m(0, 'svg', 3), R(1, 'polygon', 4), d())
}
var qn = [[['mat-icon'], ['', 'matMenuItemIcon', '']], '*'],
  Wn = ['mat-icon, [matMenuItemIcon]', '*']
function Yn(a, s) {
  if (a & 1) {
    let l = L()
    m(0, 'div', 0),
      x('keydown', function (t) {
        I(l)
        let i = k()
        return E(i._handleKeydown(t))
      })('click', function () {
        I(l)
        let t = k()
        return E(t.closed.emit('click'))
      })('@transformMenu.start', function (t) {
        I(l)
        let i = k()
        return E(i._onAnimationStart(t))
      })('@transformMenu.done', function (t) {
        I(l)
        let i = k()
        return E(i._onAnimationDone(t))
      }),
      m(1, 'div', 1),
      ct(2),
      d()()
  }
  if (a & 2) {
    let l = k()
    w('id', l.panelId)('ngClass', l._classList)('@transformMenu', l._panelAnimationState),
      ee('aria-label', l.ariaLabel || null)('aria-labelledby', l.ariaLabelledby || null)(
        'aria-describedby',
        l.ariaDescribedby || null,
      )
  }
}
var Un = ['*'],
  di = new T('MAT_MENU_PANEL'),
  Xe = (() => {
    let s = class s {
      constructor(e, t, i, n, r) {
        ;(this._elementRef = e),
          (this._document = t),
          (this._focusMonitor = i),
          (this._parentMenu = n),
          (this._changeDetectorRef = r),
          (this.role = 'menuitem'),
          (this.disabled = !1),
          (this.disableRipple = !1),
          (this._hovered = new j()),
          (this._focused = new j()),
          (this._highlighted = !1),
          (this._triggersSubmenu = !1),
          n?.addItem?.(this)
      }
      focus(e, t) {
        this._focusMonitor && e
          ? this._focusMonitor.focusVia(this._getHostElement(), e, t)
          : this._getHostElement().focus(t),
          this._focused.next(this)
      }
      ngAfterViewInit() {
        this._focusMonitor && this._focusMonitor.monitor(this._elementRef, !1)
      }
      ngOnDestroy() {
        this._focusMonitor && this._focusMonitor.stopMonitoring(this._elementRef),
          this._parentMenu && this._parentMenu.removeItem && this._parentMenu.removeItem(this),
          this._hovered.complete(),
          this._focused.complete()
      }
      _getTabIndex() {
        return this.disabled ? '-1' : '0'
      }
      _getHostElement() {
        return this._elementRef.nativeElement
      }
      _checkDisabled(e) {
        this.disabled && (e.preventDefault(), e.stopPropagation())
      }
      _handleMouseEnter() {
        this._hovered.next(this)
      }
      getLabel() {
        let e = this._elementRef.nativeElement.cloneNode(!0),
          t = e.querySelectorAll('mat-icon, .material-icons')
        for (let i = 0; i < t.length; i++) t[i].remove()
        return e.textContent?.trim() || ''
      }
      _setHighlighted(e) {
        ;(this._highlighted = e), this._changeDetectorRef?.markForCheck()
      }
      _setTriggersSubmenu(e) {
        ;(this._triggersSubmenu = e), this._changeDetectorRef?.markForCheck()
      }
      _hasFocus() {
        return this._document && this._document.activeElement === this._getHostElement()
      }
    }
    ;(s.ɵfac = function (t) {
      return new (t || s)(_(G), _(se), _(Ce), _(di, 8), _(ge))
    }),
      (s.ɵcmp = H({
        type: s,
        selectors: [['', 'mat-menu-item', '']],
        hostAttrs: [1, 'mat-mdc-menu-item', 'mat-mdc-focus-indicator'],
        hostVars: 8,
        hostBindings: function (t, i) {
          t & 1 &&
            x('click', function (r) {
              return i._checkDisabled(r)
            })('mouseenter', function () {
              return i._handleMouseEnter()
            }),
            t & 2 &&
              (ee('role', i.role)('tabindex', i._getTabIndex())('aria-disabled', i.disabled)(
                'disabled',
                i.disabled || null,
              ),
              lt('mat-mdc-menu-item-highlighted', i._highlighted)(
                'mat-mdc-menu-item-submenu-trigger',
                i._triggersSubmenu,
              ))
        },
        inputs: {
          role: 'role',
          disabled: [A.HasDecoratorInputTransform, 'disabled', 'disabled', Ye],
          disableRipple: [A.HasDecoratorInputTransform, 'disableRipple', 'disableRipple', Ye],
        },
        exportAs: ['matMenuItem'],
        standalone: !0,
        features: [ni, B],
        attrs: Zn,
        ngContentSelectors: Wn,
        decls: 5,
        vars: 3,
        consts: [
          [1, 'mat-mdc-menu-item-text'],
          ['matRipple', '', 1, 'mat-mdc-menu-ripple', 3, 'matRippleDisabled', 'matRippleTrigger'],
          [
            'class',
            'mat-mdc-menu-submenu-icon',
            'viewBox',
            '0 0 5 10',
            'focusable',
            'false',
            'aria-hidden',
            'true',
          ],
          [
            'viewBox',
            '0 0 5 10',
            'focusable',
            'false',
            'aria-hidden',
            'true',
            1,
            'mat-mdc-menu-submenu-icon',
          ],
          ['points', '0,0 5,5 0,10'],
        ],
        template: function (t, i) {
          t & 1 &&
            (ai(qn),
            ct(0),
            m(1, 'span', 0),
            ct(2, 1),
            d(),
            R(3, 'div', 1),
            M(4, Gn, 2, 0, ':svg:svg', 2)),
            t & 2 &&
              (v(3),
              w('matRippleDisabled', i.disableRipple || i.disabled)(
                'matRippleTrigger',
                i._getHostElement(),
              ),
              v(),
              te(4, i._triggersSubmenu ? 4 : -1))
        },
        dependencies: [ft],
        encapsulation: 2,
        changeDetection: 0,
      }))
    let a = s
    return a
  })()
var Qn = new T('MatMenuContent')
var zt = {
    transformMenu: li('transformMenu', [
      ci('void', Fe({ opacity: 0, transform: 'scale(0.8)' })),
      Mt(
        'void => enter',
        xt('120ms cubic-bezier(0, 0, 0.2, 1)', Fe({ opacity: 1, transform: 'scale(1)' })),
      ),
      Mt('* => void', xt('100ms 25ms linear', Fe({ opacity: 0 }))),
    ]),
    fadeInItems: li('fadeInItems', [
      ci('showing', Fe({ opacity: 1 })),
      Mt('void => *', [Fe({ opacity: 0 }), xt('400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)')]),
    ]),
  },
  Ia = zt.fadeInItems,
  Ea = zt.transformMenu,
  Kn = 0,
  Xn = new T('mat-menu-default-options', { providedIn: 'root', factory: Jn })
function Jn() {
  return {
    overlapTrigger: !1,
    xPosition: 'after',
    yPosition: 'below',
    backdropClass: 'cdk-overlay-transparent-backdrop',
  }
}
var Re = (() => {
    let s = class s {
      get xPosition() {
        return this._xPosition
      }
      set xPosition(e) {
        ;(this._xPosition = e), this.setPositionClasses()
      }
      get yPosition() {
        return this._yPosition
      }
      set yPosition(e) {
        ;(this._yPosition = e), this.setPositionClasses()
      }
      set panelClass(e) {
        let t = this._previousPanelClass
        t &&
          t.length &&
          t.split(' ').forEach((i) => {
            this._classList[i] = !1
          }),
          (this._previousPanelClass = e),
          e &&
            e.length &&
            (e.split(' ').forEach((i) => {
              this._classList[i] = !0
            }),
            (this._elementRef.nativeElement.className = ''))
      }
      get classList() {
        return this.panelClass
      }
      set classList(e) {
        this.panelClass = e
      }
      constructor(e, t, i, n) {
        ;(this._elementRef = e),
          (this._ngZone = t),
          (this._changeDetectorRef = n),
          (this._elevationPrefix = 'mat-elevation-z'),
          (this._baseElevation = 8),
          (this._directDescendantItems = new yi()),
          (this._classList = {}),
          (this._panelAnimationState = 'void'),
          (this._animationDone = new j()),
          (this.closed = new X()),
          (this.close = this.closed),
          (this.panelId = `mat-menu-panel-${Kn++}`),
          (this.overlayPanelClass = i.overlayPanelClass || ''),
          (this._xPosition = i.xPosition),
          (this._yPosition = i.yPosition),
          (this.backdropClass = i.backdropClass),
          (this.overlapTrigger = i.overlapTrigger),
          (this.hasBackdrop = i.hasBackdrop)
      }
      ngOnInit() {
        this.setPositionClasses()
      }
      ngAfterContentInit() {
        this._updateDirectDescendants(),
          (this._keyManager = new Ri(this._directDescendantItems)
            .withWrap()
            .withTypeAhead()
            .withHomeAndEnd()),
          this._keyManager.tabOut.subscribe(() => this.closed.emit('tab')),
          this._directDescendantItems.changes
            .pipe(
              re(this._directDescendantItems),
              $e((e) => xe(...e.map((t) => t._focused))),
            )
            .subscribe((e) => this._keyManager.updateActiveItem(e)),
          this._directDescendantItems.changes.subscribe((e) => {
            let t = this._keyManager
            if (this._panelAnimationState === 'enter' && t.activeItem?._hasFocus()) {
              let i = e.toArray(),
                n = Math.max(0, Math.min(i.length - 1, t.activeItemIndex || 0))
              i[n] && !i[n].disabled ? t.setActiveItem(n) : t.setNextItemActive()
            }
          })
      }
      ngOnDestroy() {
        this._keyManager?.destroy(),
          this._directDescendantItems.destroy(),
          this.closed.complete(),
          this._firstItemFocusSubscription?.unsubscribe()
      }
      _hovered() {
        return this._directDescendantItems.changes.pipe(
          re(this._directDescendantItems),
          $e((t) => xe(...t.map((i) => i._hovered))),
        )
      }
      addItem(e) {}
      removeItem(e) {}
      _handleKeydown(e) {
        let t = e.keyCode,
          i = this._keyManager
        switch (t) {
          case 27:
            Ee(e) || (e.preventDefault(), this.closed.emit('keydown'))
            break
          case 37:
            this.parentMenu && this.direction === 'ltr' && this.closed.emit('keydown')
            break
          case 39:
            this.parentMenu && this.direction === 'rtl' && this.closed.emit('keydown')
            break
          default:
            ;(t === 38 || t === 40) && i.setFocusOrigin('keyboard'), i.onKeydown(e)
            return
        }
        e.stopPropagation()
      }
      focusFirstItem(e = 'program') {
        this._firstItemFocusSubscription?.unsubscribe(),
          (this._firstItemFocusSubscription = this._ngZone.onStable.pipe(ae(1)).subscribe(() => {
            let t = null
            if (
              (this._directDescendantItems.length &&
                (t = this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),
              !t || !t.contains(document.activeElement))
            ) {
              let i = this._keyManager
              i.setFocusOrigin(e).setFirstItemActive(), !i.activeItem && t && t.focus()
            }
          }))
      }
      resetActiveItem() {
        this._keyManager.setActiveItem(-1)
      }
      setElevation(e) {
        let t = Math.min(this._baseElevation + e, 24),
          i = `${this._elevationPrefix}${t}`,
          n = Object.keys(this._classList).find((r) => r.startsWith(this._elevationPrefix))
        ;(!n || n === this._previousElevation) &&
          (this._previousElevation && (this._classList[this._previousElevation] = !1),
          (this._classList[i] = !0),
          (this._previousElevation = i))
      }
      setPositionClasses(e = this.xPosition, t = this.yPosition) {
        let i = this._classList
        ;(i['mat-menu-before'] = e === 'before'),
          (i['mat-menu-after'] = e === 'after'),
          (i['mat-menu-above'] = t === 'above'),
          (i['mat-menu-below'] = t === 'below'),
          this._changeDetectorRef?.markForCheck()
      }
      _startAnimation() {
        this._panelAnimationState = 'enter'
      }
      _resetAnimation() {
        this._panelAnimationState = 'void'
      }
      _onAnimationDone(e) {
        this._animationDone.next(e), (this._isAnimating = !1)
      }
      _onAnimationStart(e) {
        ;(this._isAnimating = !0),
          e.toState === 'enter' &&
            this._keyManager.activeItemIndex === 0 &&
            (e.element.scrollTop = 0)
      }
      _updateDirectDescendants() {
        this._allItems.changes.pipe(re(this._allItems)).subscribe((e) => {
          this._directDescendantItems.reset(e.filter((t) => t._parentMenu === this)),
            this._directDescendantItems.notifyOnChanges()
        })
      }
    }
    ;(s.ɵfac = function (t) {
      return new (t || s)(_(G), _(fe), _(Xn), _(ge))
    }),
      (s.ɵcmp = H({
        type: s,
        selectors: [['mat-menu']],
        contentQueries: function (t, i, n) {
          if ((t & 1 && (ht(n, Qn, 5), ht(n, Xe, 5), ht(n, Xe, 4)), t & 2)) {
            let r
            ie((r = ne())) && (i.lazyContent = r.first),
              ie((r = ne())) && (i._allItems = r),
              ie((r = ne())) && (i.items = r)
          }
        },
        viewQuery: function (t, i) {
          if ((t & 1 && De(ze, 5), t & 2)) {
            let n
            ie((n = ne())) && (i.templateRef = n.first)
          }
        },
        hostVars: 3,
        hostBindings: function (t, i) {
          t & 2 && ee('aria-label', null)('aria-labelledby', null)('aria-describedby', null)
        },
        inputs: {
          backdropClass: 'backdropClass',
          ariaLabel: [A.None, 'aria-label', 'ariaLabel'],
          ariaLabelledby: [A.None, 'aria-labelledby', 'ariaLabelledby'],
          ariaDescribedby: [A.None, 'aria-describedby', 'ariaDescribedby'],
          xPosition: 'xPosition',
          yPosition: 'yPosition',
          overlapTrigger: [A.HasDecoratorInputTransform, 'overlapTrigger', 'overlapTrigger', Ye],
          hasBackdrop: [
            A.HasDecoratorInputTransform,
            'hasBackdrop',
            'hasBackdrop',
            (e) => (e == null ? null : Ye(e)),
          ],
          panelClass: [A.None, 'class', 'panelClass'],
          classList: 'classList',
        },
        outputs: { closed: 'closed', close: 'close' },
        exportAs: ['matMenu'],
        standalone: !0,
        features: [Ie([{ provide: di, useExisting: s }]), ni, B],
        ngContentSelectors: Un,
        decls: 1,
        vars: 0,
        consts: [
          [
            'tabindex',
            '-1',
            'role',
            'menu',
            1,
            'mat-mdc-menu-panel',
            'mat-mdc-elevation-specific',
            3,
            'id',
            'ngClass',
            'keydown',
            'click',
          ],
          [1, 'mat-mdc-menu-content'],
        ],
        template: function (t, i) {
          t & 1 && (ai(), M(0, Yn, 3, 6, 'ng-template'))
        },
        dependencies: [de],
        styles: [
          'mat-menu{display:none}.mat-mdc-menu-content{margin:0;padding:8px 0;list-style-type:none}.mat-mdc-menu-content:focus{outline:none}.mat-mdc-menu-content,.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;flex:1;white-space:normal;font-family:var(--mat-menu-item-label-text-font);line-height:var(--mat-menu-item-label-text-line-height);font-size:var(--mat-menu-item-label-text-size);letter-spacing:var(--mat-menu-item-label-text-tracking);font-weight:var(--mat-menu-item-label-text-weight)}.mat-mdc-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;box-sizing:border-box;outline:0;border-radius:var(--mat-menu-container-shape);background-color:var(--mat-menu-container-color);will-change:transform,opacity}.mat-mdc-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-mdc-menu-panel{outline:solid 1px}.mat-divider{color:var(--mat-menu-divider-color);margin-bottom:var(--mat-menu-divider-bottom-spacing);margin-top:var(--mat-menu-divider-top-spacing)}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mat-menu-item-leading-spacing);padding-right:var(--mat-menu-item-trailing-spacing);-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;align-items:center;min-height:48px}.mat-mdc-menu-item:focus{outline:none}[dir=rtl] .mat-mdc-menu-item,.mat-mdc-menu-item[dir=rtl]{padding-left:var(--mat-menu-item-trailing-spacing);padding-right:var(--mat-menu-item-leading-spacing)}.mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-leading-spacing);padding-right:var(--mat-menu-item-with-icon-trailing-spacing)}[dir=rtl] .mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]),.mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon])[dir=rtl]{padding-left:var(--mat-menu-item-with-icon-trailing-spacing);padding-right:var(--mat-menu-item-with-icon-leading-spacing)}.mat-mdc-menu-item::-moz-focus-inner{border:0}.mat-mdc-menu-item,.mat-mdc-menu-item:visited,.mat-mdc-menu-item:link{color:var(--mat-menu-item-label-text-color)}.mat-mdc-menu-item .mat-icon-no-color,.mat-mdc-menu-item .mat-mdc-menu-submenu-icon{color:var(--mat-menu-item-icon-color)}.mat-mdc-menu-item[disabled]{cursor:default;opacity:.38}.mat-mdc-menu-item[disabled]::after{display:block;position:absolute;content:"";top:0;left:0;bottom:0;right:0}.mat-mdc-menu-item .mat-icon{flex-shrink:0;margin-right:var(--mat-menu-item-spacing);height:var(--mat-menu-item-icon-size);width:var(--mat-menu-item-icon-size)}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:var(--mat-menu-item-spacing)}.mat-mdc-menu-item:not([disabled]):hover{background-color:var(--mat-menu-item-hover-state-layer-color)}.mat-mdc-menu-item:not([disabled]).cdk-program-focused,.mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused,.mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted{background-color:var(--mat-menu-item-focus-state-layer-color)}.cdk-high-contrast-active .mat-mdc-menu-item{margin-top:1px}.mat-mdc-menu-submenu-icon{width:var(--mat-menu-item-icon-size);height:10px;fill:currentColor;padding-left:var(--mat-menu-item-spacing)}[dir=rtl] .mat-mdc-menu-submenu-icon{right:auto;padding-right:var(--mat-menu-item-spacing);padding-left:0}.cdk-high-contrast-active .mat-mdc-menu-submenu-icon{fill:CanvasText}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}',
        ],
        encapsulation: 2,
        data: { animation: [zt.transformMenu, zt.fadeInItems] },
        changeDetection: 0,
      }))
    let a = s
    return a
  })(),
  _n = new T('mat-menu-scroll-strategy', {
    providedIn: 'root',
    factory: () => {
      let a = g($)
      return () => a.scrollStrategies.reposition()
    },
  })
function es(a) {
  return () => a.scrollStrategies.reposition()
}
var ts = { provide: _n, deps: [$], useFactory: es },
  hn = Fi({ passive: !0 })
var gn = (() => {
    let s = class s {
      get _deprecatedMatMenuTriggerFor() {
        return this.menu
      }
      set _deprecatedMatMenuTriggerFor(e) {
        this.menu = e
      }
      get menu() {
        return this._menu
      }
      set menu(e) {
        e !== this._menu &&
          ((this._menu = e),
          this._menuCloseSubscription.unsubscribe(),
          e &&
            (this._parentMaterialMenu,
            (this._menuCloseSubscription = e.close.subscribe((t) => {
              this._destroyMenu(t),
                (t === 'click' || t === 'tab') &&
                  this._parentMaterialMenu &&
                  this._parentMaterialMenu.closed.emit(t)
            }))),
          this._menuItemInstance?._setTriggersSubmenu(this.triggersSubmenu()))
      }
      constructor(e, t, i, n, r, h, o, c, u) {
        ;(this._overlay = e),
          (this._element = t),
          (this._viewContainerRef = i),
          (this._menuItemInstance = h),
          (this._dir = o),
          (this._focusMonitor = c),
          (this._ngZone = u),
          (this._overlayRef = null),
          (this._menuOpen = !1),
          (this._closingActionsSubscription = nt.EMPTY),
          (this._hoverSubscription = nt.EMPTY),
          (this._menuCloseSubscription = nt.EMPTY),
          (this._changeDetectorRef = g(ge)),
          (this._handleTouchStart = (S) => {
            Li(S) || (this._openedBy = 'touch')
          }),
          (this._openedBy = void 0),
          (this.restoreFocus = !0),
          (this.menuOpened = new X()),
          (this.onMenuOpen = this.menuOpened),
          (this.menuClosed = new X()),
          (this.onMenuClose = this.menuClosed),
          (this._scrollStrategy = n),
          (this._parentMaterialMenu = r instanceof Re ? r : void 0),
          t.nativeElement.addEventListener('touchstart', this._handleTouchStart, hn)
      }
      ngAfterContentInit() {
        this._handleHover()
      }
      ngOnDestroy() {
        this._overlayRef && (this._overlayRef.dispose(), (this._overlayRef = null)),
          this._element.nativeElement.removeEventListener('touchstart', this._handleTouchStart, hn),
          this._menuCloseSubscription.unsubscribe(),
          this._closingActionsSubscription.unsubscribe(),
          this._hoverSubscription.unsubscribe()
      }
      get menuOpen() {
        return this._menuOpen
      }
      get dir() {
        return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr'
      }
      triggersSubmenu() {
        return !!(this._menuItemInstance && this._parentMaterialMenu && this.menu)
      }
      toggleMenu() {
        return this._menuOpen ? this.closeMenu() : this.openMenu()
      }
      openMenu() {
        let e = this.menu
        if (this._menuOpen || !e) return
        let t = this._createOverlay(e),
          i = t.getConfig(),
          n = i.positionStrategy
        this._setPosition(e, n),
          (i.hasBackdrop = e.hasBackdrop == null ? !this.triggersSubmenu() : e.hasBackdrop),
          t.attach(this._getPortal(e)),
          e.lazyContent && e.lazyContent.attach(this.menuData),
          (this._closingActionsSubscription = this._menuClosingActions().subscribe(() =>
            this.closeMenu(),
          )),
          this._initMenu(e),
          e instanceof Re &&
            (e._startAnimation(),
            e._directDescendantItems.changes.pipe(at(e.close)).subscribe(() => {
              n.withLockedPosition(!1).reapplyLastPosition(), n.withLockedPosition(!0)
            }))
      }
      closeMenu() {
        this.menu?.close.emit()
      }
      focus(e, t) {
        this._focusMonitor && e
          ? this._focusMonitor.focusVia(this._element, e, t)
          : this._element.nativeElement.focus(t)
      }
      updatePosition() {
        this._overlayRef?.updatePosition()
      }
      _destroyMenu(e) {
        if (!this._overlayRef || !this.menuOpen) return
        let t = this.menu
        this._closingActionsSubscription.unsubscribe(),
          this._overlayRef.detach(),
          this.restoreFocus &&
            (e === 'keydown' || !this._openedBy || !this.triggersSubmenu()) &&
            this.focus(this._openedBy),
          (this._openedBy = void 0),
          t instanceof Re
            ? (t._resetAnimation(),
              t.lazyContent
                ? t._animationDone
                    .pipe(
                      Q((i) => i.toState === 'void'),
                      ae(1),
                      at(t.lazyContent._attached),
                    )
                    .subscribe({
                      next: () => t.lazyContent.detach(),
                      complete: () => this._setIsMenuOpen(!1),
                    })
                : this._setIsMenuOpen(!1))
            : (this._setIsMenuOpen(!1), t?.lazyContent?.detach())
      }
      _initMenu(e) {
        ;(e.parentMenu = this.triggersSubmenu() ? this._parentMaterialMenu : void 0),
          (e.direction = this.dir),
          this._setMenuElevation(e),
          e.focusFirstItem(this._openedBy || 'program'),
          this._setIsMenuOpen(!0)
      }
      _setMenuElevation(e) {
        if (e.setElevation) {
          let t = 0,
            i = e.parentMenu
          for (; i; ) t++, (i = i.parentMenu)
          e.setElevation(t)
        }
      }
      _setIsMenuOpen(e) {
        e !== this._menuOpen &&
          ((this._menuOpen = e),
          this._menuOpen ? this.menuOpened.emit() : this.menuClosed.emit(),
          this.triggersSubmenu() && this._menuItemInstance._setHighlighted(e),
          this._changeDetectorRef.markForCheck())
      }
      _createOverlay(e) {
        if (!this._overlayRef) {
          let t = this._getOverlayConfig(e)
          this._subscribeToPositions(e, t.positionStrategy),
            (this._overlayRef = this._overlay.create(t)),
            this._overlayRef.keydownEvents().subscribe()
        }
        return this._overlayRef
      }
      _getOverlayConfig(e) {
        return new yt({
          positionStrategy: this._overlay
            .position()
            .flexibleConnectedTo(this._element)
            .withLockedPosition()
            .withGrowAfterOpen()
            .withTransformOriginOn('.mat-menu-panel, .mat-mdc-menu-panel'),
          backdropClass: e.backdropClass || 'cdk-overlay-transparent-backdrop',
          panelClass: e.overlayPanelClass,
          scrollStrategy: this._scrollStrategy(),
          direction: this._dir,
        })
      }
      _subscribeToPositions(e, t) {
        e.setPositionClasses &&
          t.positionChanges.subscribe((i) => {
            let n = i.connectionPair.overlayX === 'start' ? 'after' : 'before',
              r = i.connectionPair.overlayY === 'top' ? 'below' : 'above'
            this._ngZone
              ? this._ngZone.run(() => e.setPositionClasses(n, r))
              : e.setPositionClasses(n, r)
          })
      }
      _setPosition(e, t) {
        let [i, n] = e.xPosition === 'before' ? ['end', 'start'] : ['start', 'end'],
          [r, h] = e.yPosition === 'above' ? ['bottom', 'top'] : ['top', 'bottom'],
          [o, c] = [r, h],
          [u, S] = [i, n],
          y = 0
        if (this.triggersSubmenu()) {
          if (
            ((S = i = e.xPosition === 'before' ? 'start' : 'end'),
            (n = u = i === 'end' ? 'start' : 'end'),
            this._parentMaterialMenu)
          ) {
            if (this._parentInnerPadding == null) {
              let C = this._parentMaterialMenu.items.first
              this._parentInnerPadding = C ? C._getHostElement().offsetTop : 0
            }
            y = r === 'bottom' ? this._parentInnerPadding : -this._parentInnerPadding
          }
        } else
          e.overlapTrigger ||
            ((o = r === 'top' ? 'bottom' : 'top'), (c = h === 'top' ? 'bottom' : 'top'))
        t.withPositions([
          { originX: i, originY: o, overlayX: u, overlayY: r, offsetY: y },
          { originX: n, originY: o, overlayX: S, overlayY: r, offsetY: y },
          { originX: i, originY: c, overlayX: u, overlayY: h, offsetY: -y },
          { originX: n, originY: c, overlayX: S, overlayY: h, offsetY: -y },
        ])
      }
      _menuClosingActions() {
        let e = this._overlayRef.backdropClick(),
          t = this._overlayRef.detachments(),
          i = this._parentMaterialMenu ? this._parentMaterialMenu.closed : He(),
          n = this._parentMaterialMenu
            ? this._parentMaterialMenu._hovered().pipe(
                Q((r) => r !== this._menuItemInstance),
                Q(() => this._menuOpen),
              )
            : He()
        return xe(e, i, n, t)
      }
      _handleMousedown(e) {
        Ni(e) ||
          ((this._openedBy = e.button === 0 ? 'mouse' : void 0),
          this.triggersSubmenu() && e.preventDefault())
      }
      _handleKeydown(e) {
        let t = e.keyCode
        ;(t === 13 || t === 32) && (this._openedBy = 'keyboard'),
          this.triggersSubmenu() &&
            ((t === 39 && this.dir === 'ltr') || (t === 37 && this.dir === 'rtl')) &&
            ((this._openedBy = 'keyboard'), this.openMenu())
      }
      _handleClick(e) {
        this.triggersSubmenu() ? (e.stopPropagation(), this.openMenu()) : this.toggleMenu()
      }
      _handleHover() {
        !this.triggersSubmenu() ||
          !this._parentMaterialMenu ||
          (this._hoverSubscription = this._parentMaterialMenu
            ._hovered()
            .pipe(
              Q((e) => e === this._menuItemInstance && !e.disabled),
              ei(0, Jt),
            )
            .subscribe(() => {
              ;(this._openedBy = 'mouse'),
                this.menu instanceof Re && this.menu._isAnimating
                  ? this.menu._animationDone
                      .pipe(ae(1), ei(0, Jt), at(this._parentMaterialMenu._hovered()))
                      .subscribe(() => this.openMenu())
                  : this.openMenu()
            }))
      }
      _getPortal(e) {
        return (
          (!this._portal || this._portal.templateRef !== e.templateRef) &&
            (this._portal = new kt(e.templateRef, this._viewContainerRef)),
          this._portal
        )
      }
    }
    ;(s.ɵfac = function (t) {
      return new (t || s)(_($), _(G), _(xi), _(_n), _(di, 8), _(Xe, 10), _(Ue, 8), _(Ce), _(fe))
    }),
      (s.ɵdir = oe({
        type: s,
        selectors: [
          ['', 'mat-menu-trigger-for', ''],
          ['', 'matMenuTriggerFor', ''],
        ],
        hostAttrs: [1, 'mat-mdc-menu-trigger'],
        hostVars: 3,
        hostBindings: function (t, i) {
          t & 1 &&
            x('click', function (r) {
              return i._handleClick(r)
            })('mousedown', function (r) {
              return i._handleMousedown(r)
            })('keydown', function (r) {
              return i._handleKeydown(r)
            }),
            t & 2 &&
              ee('aria-haspopup', i.menu ? 'menu' : null)('aria-expanded', i.menuOpen)(
                'aria-controls',
                i.menuOpen ? i.menu.panelId : null,
              )
        },
        inputs: {
          _deprecatedMatMenuTriggerFor: [
            A.None,
            'mat-menu-trigger-for',
            '_deprecatedMatMenuTriggerFor',
          ],
          menu: [A.None, 'matMenuTriggerFor', 'menu'],
          menuData: [A.None, 'matMenuTriggerData', 'menuData'],
          restoreFocus: [A.None, 'matMenuTriggerRestoreFocus', 'restoreFocus'],
        },
        outputs: {
          menuOpened: 'menuOpened',
          onMenuOpen: 'onMenuOpen',
          menuClosed: 'menuClosed',
          onMenuClose: 'onMenuClose',
        },
        exportAs: ['matMenuTrigger'],
        standalone: !0,
      }))
    let a = s
    return a
  })(),
  fn = (() => {
    let s = class s {}
    ;(s.ɵfac = function (t) {
      return new (t || s)()
    }),
      (s.ɵmod = Me({ type: s })),
      (s.ɵinj = we({ providers: [ts], imports: [me, vt, Pe, Ae, Bi, Pe] }))
    let a = s
    return a
  })()
function ns(a, s) {}
var ke = class {
  constructor() {
    ;(this.role = 'dialog'),
      (this.panelClass = ''),
      (this.hasBackdrop = !0),
      (this.backdropClass = ''),
      (this.disableClose = !1),
      (this.width = ''),
      (this.height = ''),
      (this.data = null),
      (this.ariaDescribedBy = null),
      (this.ariaLabelledBy = null),
      (this.ariaLabel = null),
      (this.ariaModal = !0),
      (this.autoFocus = 'first-tabbable'),
      (this.restoreFocus = !0),
      (this.closeOnNavigation = !0),
      (this.closeOnDestroy = !0),
      (this.closeOnOverlayDetachments = !0)
  }
}
var ui = (() => {
    let s = class s extends $i {
      constructor(e, t, i, n, r, h, o, c) {
        super(),
          (this._elementRef = e),
          (this._focusTrapFactory = t),
          (this._config = n),
          (this._interactivityChecker = r),
          (this._ngZone = h),
          (this._overlayRef = o),
          (this._focusMonitor = c),
          (this._platform = g(Ai)),
          (this._focusTrap = null),
          (this._elementFocusedBeforeDialogWasOpened = null),
          (this._closeInteractionType = null),
          (this._ariaLabelledByQueue = []),
          (this._changeDetectorRef = g(ge)),
          (this.attachDomPortal = (u) => {
            this._portalOutlet.hasAttached()
            let S = this._portalOutlet.attachDomPortal(u)
            return this._contentAttached(), S
          }),
          (this._document = i),
          this._config.ariaLabelledBy && this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)
      }
      _addAriaLabelledBy(e) {
        this._ariaLabelledByQueue.push(e), this._changeDetectorRef.markForCheck()
      }
      _removeAriaLabelledBy(e) {
        let t = this._ariaLabelledByQueue.indexOf(e)
        t > -1 && (this._ariaLabelledByQueue.splice(t, 1), this._changeDetectorRef.markForCheck())
      }
      _contentAttached() {
        this._initializeFocusTrap(), this._handleBackdropClicks(), this._captureInitialFocus()
      }
      _captureInitialFocus() {
        this._trapFocus()
      }
      ngOnDestroy() {
        this._restoreFocus()
      }
      attachComponentPortal(e) {
        this._portalOutlet.hasAttached()
        let t = this._portalOutlet.attachComponentPortal(e)
        return this._contentAttached(), t
      }
      attachTemplatePortal(e) {
        this._portalOutlet.hasAttached()
        let t = this._portalOutlet.attachTemplatePortal(e)
        return this._contentAttached(), t
      }
      _recaptureFocus() {
        this._containsFocus() || this._trapFocus()
      }
      _forceFocus(e, t) {
        this._interactivityChecker.isFocusable(e) ||
          ((e.tabIndex = -1),
          this._ngZone.runOutsideAngular(() => {
            let i = () => {
              e.removeEventListener('blur', i),
                e.removeEventListener('mousedown', i),
                e.removeAttribute('tabindex')
            }
            e.addEventListener('blur', i), e.addEventListener('mousedown', i)
          })),
          e.focus(t)
      }
      _focusByCssSelector(e, t) {
        let i = this._elementRef.nativeElement.querySelector(e)
        i && this._forceFocus(i, t)
      }
      _trapFocus() {
        let e = this._elementRef.nativeElement
        switch (this._config.autoFocus) {
          case !1:
          case 'dialog':
            this._containsFocus() || e.focus()
            break
          case !0:
          case 'first-tabbable':
            this._focusTrap?.focusInitialElementWhenReady().then((t) => {
              t || this._focusDialogContainer()
            })
            break
          case 'first-heading':
            this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]')
            break
          default:
            this._focusByCssSelector(this._config.autoFocus)
            break
        }
      }
      _restoreFocus() {
        let e = this._config.restoreFocus,
          t = null
        if (
          (typeof e == 'string'
            ? (t = this._document.querySelector(e))
            : typeof e == 'boolean'
            ? (t = e ? this._elementFocusedBeforeDialogWasOpened : null)
            : e && (t = e),
          this._config.restoreFocus && t && typeof t.focus == 'function')
        ) {
          let i = pt(),
            n = this._elementRef.nativeElement
          ;(!i || i === this._document.body || i === n || n.contains(i)) &&
            (this._focusMonitor
              ? (this._focusMonitor.focusVia(t, this._closeInteractionType),
                (this._closeInteractionType = null))
              : t.focus())
        }
        this._focusTrap && this._focusTrap.destroy()
      }
      _focusDialogContainer() {
        this._elementRef.nativeElement.focus && this._elementRef.nativeElement.focus()
      }
      _containsFocus() {
        let e = this._elementRef.nativeElement,
          t = pt()
        return e === t || e.contains(t)
      }
      _initializeFocusTrap() {
        this._platform.isBrowser &&
          ((this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement)),
          this._document && (this._elementFocusedBeforeDialogWasOpened = pt()))
      }
      _handleBackdropClicks() {
        this._overlayRef.backdropClick().subscribe(() => {
          this._config.disableClose && this._recaptureFocus()
        })
      }
    }
    ;(s.ɵfac = function (t) {
      return new (t || s)(_(G), _(gt), _(se, 8), _(ke), _(_t), _(fe), _(Oe), _(Ce))
    }),
      (s.ɵcmp = H({
        type: s,
        selectors: [['cdk-dialog-container']],
        viewQuery: function (t, i) {
          if ((t & 1 && De(Qe, 7), t & 2)) {
            let n
            ie((n = ne())) && (i._portalOutlet = n.first)
          }
        },
        hostAttrs: ['tabindex', '-1', 1, 'cdk-dialog-container'],
        hostVars: 6,
        hostBindings: function (t, i) {
          t & 2 &&
            ee('id', i._config.id || null)('role', i._config.role)(
              'aria-modal',
              i._config.ariaModal,
            )('aria-labelledby', i._config.ariaLabel ? null : i._ariaLabelledByQueue[0])(
              'aria-label',
              i._config.ariaLabel,
            )('aria-describedby', i._config.ariaDescribedBy || null)
        },
        standalone: !0,
        features: [Ve, B],
        decls: 1,
        vars: 0,
        consts: [['cdkPortalOutlet', '']],
        template: function (t, i) {
          t & 1 && M(0, ns, 0, 0, 'ng-template', 0)
        },
        dependencies: [Qe],
        styles: [
          '.cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}',
        ],
        encapsulation: 2,
      }))
    let a = s
    return a
  })(),
  et = class {
    constructor(s, l) {
      ;(this.overlayRef = s),
        (this.config = l),
        (this.closed = new j()),
        (this.disableClose = l.disableClose),
        (this.backdropClick = s.backdropClick()),
        (this.keydownEvents = s.keydownEvents()),
        (this.outsidePointerEvents = s.outsidePointerEvents()),
        (this.id = l.id),
        this.keydownEvents.subscribe((e) => {
          e.keyCode === 27 &&
            !this.disableClose &&
            !Ee(e) &&
            (e.preventDefault(), this.close(void 0, { focusOrigin: 'keyboard' }))
        }),
        this.backdropClick.subscribe(() => {
          this.disableClose || this.close(void 0, { focusOrigin: 'mouse' })
        }),
        (this._detachSubscription = s.detachments().subscribe(() => {
          l.closeOnOverlayDetachments !== !1 && this.close()
        }))
    }
    close(s, l) {
      if (this.containerInstance) {
        let e = this.closed
        ;(this.containerInstance._closeInteractionType = l?.focusOrigin || 'program'),
          this._detachSubscription.unsubscribe(),
          this.overlayRef.dispose(),
          e.next(s),
          e.complete(),
          (this.componentInstance = this.containerInstance = null)
      }
    }
    updatePosition() {
      return this.overlayRef.updatePosition(), this
    }
    updateSize(s = '', l = '') {
      return this.overlayRef.updateSize({ width: s, height: l }), this
    }
    addPanelClass(s) {
      return this.overlayRef.addPanelClass(s), this
    }
    removePanelClass(s) {
      return this.overlayRef.removePanelClass(s), this
    }
  },
  ss = new T('DialogScrollStrategy', {
    providedIn: 'root',
    factory: () => {
      let a = g($)
      return () => a.scrollStrategies.block()
    },
  }),
  as = new T('DialogData'),
  rs = new T('DefaultDialogConfig')
var os = 0,
  pi = (() => {
    let s = class s {
      get openDialogs() {
        return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel
      }
      get afterOpened() {
        return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel
      }
      constructor(e, t, i, n, r, h) {
        ;(this._overlay = e),
          (this._injector = t),
          (this._defaultOptions = i),
          (this._parentDialog = n),
          (this._overlayContainer = r),
          (this._openDialogsAtThisLevel = []),
          (this._afterAllClosedAtThisLevel = new j()),
          (this._afterOpenedAtThisLevel = new j()),
          (this._ariaHiddenElements = new Map()),
          (this.afterAllClosed = st(() =>
            this.openDialogs.length
              ? this._getAfterAllClosed()
              : this._getAfterAllClosed().pipe(re(void 0)),
          )),
          (this._scrollStrategy = h)
      }
      open(e, t) {
        let i = this._defaultOptions || new ke()
        ;(t = N(N({}, i), t)),
          (t.id = t.id || `cdk-dialog-${os++}`),
          t.id && this.getDialogById(t.id)
        let n = this._getOverlayConfig(t),
          r = this._overlay.create(n),
          h = new et(r, t),
          o = this._attachContainer(r, h, t)
        return (
          (h.containerInstance = o),
          this._attachDialogContent(e, h, o, t),
          this.openDialogs.length || this._hideNonDialogContentFromAssistiveTechnology(),
          this.openDialogs.push(h),
          h.closed.subscribe(() => this._removeOpenDialog(h, !0)),
          this.afterOpened.next(h),
          h
        )
      }
      closeAll() {
        mi(this.openDialogs, (e) => e.close())
      }
      getDialogById(e) {
        return this.openDialogs.find((t) => t.id === e)
      }
      ngOnDestroy() {
        mi(this._openDialogsAtThisLevel, (e) => {
          e.config.closeOnDestroy === !1 && this._removeOpenDialog(e, !1)
        }),
          mi(this._openDialogsAtThisLevel, (e) => e.close()),
          this._afterAllClosedAtThisLevel.complete(),
          this._afterOpenedAtThisLevel.complete(),
          (this._openDialogsAtThisLevel = [])
      }
      _getOverlayConfig(e) {
        let t = new yt({
          positionStrategy:
            e.positionStrategy ||
            this._overlay.position().global().centerHorizontally().centerVertically(),
          scrollStrategy: e.scrollStrategy || this._scrollStrategy(),
          panelClass: e.panelClass,
          hasBackdrop: e.hasBackdrop,
          direction: e.direction,
          minWidth: e.minWidth,
          minHeight: e.minHeight,
          maxWidth: e.maxWidth,
          maxHeight: e.maxHeight,
          width: e.width,
          height: e.height,
          disposeOnNavigation: e.closeOnNavigation,
        })
        return e.backdropClass && (t.backdropClass = e.backdropClass), t
      }
      _attachContainer(e, t, i) {
        let n = i.injector || i.viewContainerRef?.injector,
          r = [
            { provide: ke, useValue: i },
            { provide: et, useValue: t },
            { provide: Oe, useValue: e },
          ],
          h
        i.container
          ? typeof i.container == 'function'
            ? (h = i.container)
            : ((h = i.container.type), r.push(...i.container.providers(i)))
          : (h = ui)
        let o = new oi(
          h,
          i.viewContainerRef,
          le.create({ parent: n || this._injector, providers: r }),
          i.componentFactoryResolver,
        )
        return e.attach(o).instance
      }
      _attachDialogContent(e, t, i, n) {
        if (e instanceof ze) {
          let r = this._createInjector(n, t, i, void 0),
            h = { $implicit: n.data, dialogRef: t }
          n.templateContext &&
            (h = N(
              N({}, h),
              typeof n.templateContext == 'function' ? n.templateContext() : n.templateContext,
            )),
            i.attachTemplatePortal(new kt(e, null, h, r))
        } else {
          let r = this._createInjector(n, t, i, this._injector),
            h = i.attachComponentPortal(
              new oi(e, n.viewContainerRef, r, n.componentFactoryResolver),
            )
          ;(t.componentRef = h), (t.componentInstance = h.instance)
        }
      }
      _createInjector(e, t, i, n) {
        let r = e.injector || e.viewContainerRef?.injector,
          h = [
            { provide: as, useValue: e.data },
            { provide: et, useValue: t },
          ]
        return (
          e.providers &&
            (typeof e.providers == 'function'
              ? h.push(...e.providers(t, e, i))
              : h.push(...e.providers)),
          e.direction &&
            (!r || !r.get(Ue, null, { optional: !0 })) &&
            h.push({ provide: Ue, useValue: { value: e.direction, change: He() } }),
          le.create({ parent: r || n, providers: h })
        )
      }
      _removeOpenDialog(e, t) {
        let i = this.openDialogs.indexOf(e)
        i > -1 &&
          (this.openDialogs.splice(i, 1),
          this.openDialogs.length ||
            (this._ariaHiddenElements.forEach((n, r) => {
              n ? r.setAttribute('aria-hidden', n) : r.removeAttribute('aria-hidden')
            }),
            this._ariaHiddenElements.clear(),
            t && this._getAfterAllClosed().next()))
      }
      _hideNonDialogContentFromAssistiveTechnology() {
        let e = this._overlayContainer.getContainerElement()
        if (e.parentElement) {
          let t = e.parentElement.children
          for (let i = t.length - 1; i > -1; i--) {
            let n = t[i]
            n !== e &&
              n.nodeName !== 'SCRIPT' &&
              n.nodeName !== 'STYLE' &&
              !n.hasAttribute('aria-live') &&
              (this._ariaHiddenElements.set(n, n.getAttribute('aria-hidden')),
              n.setAttribute('aria-hidden', 'true'))
          }
        }
      }
      _getAfterAllClosed() {
        let e = this._parentDialog
        return e ? e._getAfterAllClosed() : this._afterAllClosedAtThisLevel
      }
    }
    ;(s.ɵfac = function (t) {
      return new (t || s)(F($), F(le), F(rs, 8), F(s, 12), F(St), F(ss))
    }),
      (s.ɵprov = J({ token: s, factory: s.ɵfac, providedIn: 'root' }))
    let a = s
    return a
  })()
function mi(a, s) {
  let l = a.length
  for (; l--; ) s(a[l])
}
var vn = (() => {
  let s = class s {}
  ;(s.ɵfac = function (t) {
    return new (t || s)()
  }),
    (s.ɵmod = Me({ type: s })),
    (s.ɵinj = we({ providers: [pi], imports: [Ae, Ke, ji, Ke] }))
  let a = s
  return a
})()
function ls(a, s) {}
var tt = class {
    constructor() {
      ;(this.role = 'dialog'),
        (this.panelClass = ''),
        (this.hasBackdrop = !0),
        (this.backdropClass = ''),
        (this.disableClose = !1),
        (this.width = ''),
        (this.height = ''),
        (this.data = null),
        (this.ariaDescribedBy = null),
        (this.ariaLabelledBy = null),
        (this.ariaLabel = null),
        (this.ariaModal = !0),
        (this.autoFocus = 'first-tabbable'),
        (this.restoreFocus = !0),
        (this.delayFocusTrap = !0),
        (this.closeOnNavigation = !0)
    }
  },
  _i = 'mdc-dialog--open',
  Cn = 'mdc-dialog--opening',
  bn = 'mdc-dialog--closing',
  cs = 150,
  hs = 75,
  ds = (() => {
    let s = class s extends ui {
      constructor(e, t, i, n, r, h, o, c, u) {
        super(e, t, i, n, r, h, o, u),
          (this._animationMode = c),
          (this._animationStateChanged = new X()),
          (this._animationsEnabled = this._animationMode !== 'NoopAnimations'),
          (this._actionSectionCount = 0),
          (this._hostElement = this._elementRef.nativeElement),
          (this._enterAnimationDuration = this._animationsEnabled
            ? yn(this._config.enterAnimationDuration) ?? cs
            : 0),
          (this._exitAnimationDuration = this._animationsEnabled
            ? yn(this._config.exitAnimationDuration) ?? hs
            : 0),
          (this._animationTimer = null),
          (this._finishDialogOpen = () => {
            this._clearAnimationClasses(), this._openAnimationDone(this._enterAnimationDuration)
          }),
          (this._finishDialogClose = () => {
            this._clearAnimationClasses(),
              this._animationStateChanged.emit({
                state: 'closed',
                totalTime: this._exitAnimationDuration,
              })
          })
      }
      _contentAttached() {
        super._contentAttached(), this._startOpenAnimation()
      }
      _startOpenAnimation() {
        this._animationStateChanged.emit({
          state: 'opening',
          totalTime: this._enterAnimationDuration,
        }),
          this._animationsEnabled
            ? (this._hostElement.style.setProperty(kn, `${this._enterAnimationDuration}ms`),
              this._requestAnimationFrame(() => this._hostElement.classList.add(Cn, _i)),
              this._waitForAnimationToComplete(
                this._enterAnimationDuration,
                this._finishDialogOpen,
              ))
            : (this._hostElement.classList.add(_i),
              Promise.resolve().then(() => this._finishDialogOpen()))
      }
      _startExitAnimation() {
        this._animationStateChanged.emit({
          state: 'closing',
          totalTime: this._exitAnimationDuration,
        }),
          this._hostElement.classList.remove(_i),
          this._animationsEnabled
            ? (this._hostElement.style.setProperty(kn, `${this._exitAnimationDuration}ms`),
              this._requestAnimationFrame(() => this._hostElement.classList.add(bn)),
              this._waitForAnimationToComplete(
                this._exitAnimationDuration,
                this._finishDialogClose,
              ))
            : Promise.resolve().then(() => this._finishDialogClose())
      }
      _updateActionSectionCount(e) {
        ;(this._actionSectionCount += e), this._changeDetectorRef.markForCheck()
      }
      _clearAnimationClasses() {
        this._hostElement.classList.remove(Cn, bn)
      }
      _waitForAnimationToComplete(e, t) {
        this._animationTimer !== null && clearTimeout(this._animationTimer),
          (this._animationTimer = setTimeout(t, e))
      }
      _requestAnimationFrame(e) {
        this._ngZone.runOutsideAngular(() => {
          typeof requestAnimationFrame == 'function' ? requestAnimationFrame(e) : e()
        })
      }
      _captureInitialFocus() {
        this._config.delayFocusTrap || this._trapFocus()
      }
      _openAnimationDone(e) {
        this._config.delayFocusTrap && this._trapFocus(),
          this._animationStateChanged.next({ state: 'opened', totalTime: e })
      }
      ngOnDestroy() {
        super.ngOnDestroy(), this._animationTimer !== null && clearTimeout(this._animationTimer)
      }
      attachComponentPortal(e) {
        let t = super.attachComponentPortal(e)
        return t.location.nativeElement.classList.add('mat-mdc-dialog-component-host'), t
      }
    }
    ;(s.ɵfac = function (t) {
      return new (t || s)(_(G), _(gt), _(se, 8), _(tt), _(_t), _(fe), _(Oe), _(ti, 8), _(Ce))
    }),
      (s.ɵcmp = H({
        type: s,
        selectors: [['mat-dialog-container']],
        hostAttrs: ['tabindex', '-1', 1, 'mat-mdc-dialog-container', 'mdc-dialog'],
        hostVars: 10,
        hostBindings: function (t, i) {
          t & 2 &&
            (si('id', i._config.id),
            ee('aria-modal', i._config.ariaModal)('role', i._config.role)(
              'aria-labelledby',
              i._config.ariaLabel ? null : i._ariaLabelledByQueue[0],
            )('aria-label', i._config.ariaLabel)(
              'aria-describedby',
              i._config.ariaDescribedBy || null,
            ),
            lt('_mat-animation-noopable', !i._animationsEnabled)(
              'mat-mdc-dialog-container-with-actions',
              i._actionSectionCount > 0,
            ))
        },
        standalone: !0,
        features: [Ve, B],
        decls: 3,
        vars: 0,
        consts: [
          [1, 'mdc-dialog__container'],
          [1, 'mat-mdc-dialog-surface', 'mdc-dialog__surface'],
          ['cdkPortalOutlet', ''],
        ],
        template: function (t, i) {
          t & 1 && (m(0, 'div', 0)(1, 'div', 1), M(2, ls, 0, 0, 'ng-template', 2), d()())
        },
        dependencies: [Qe],
        styles: [
          '.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:var(--mdc-dialog-z-index, 7)}.mdc-dialog .mdc-dialog__content{padding:20px 24px 20px 24px}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media(max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media(min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:none}@media(max-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px;width:560px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 112px)}}@media(max-width: 720px)and (min-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:560px}}@media(max-width: 720px)and (max-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:calc(100vh - 160px)}}@media(max-width: 720px)and (min-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px}}@media(max-width: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-height: 400px),(max-width: 600px),(min-width: 720px)and (max-height: 400px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media(min-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 400px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}.mdc-dialog.mdc-dialog__scrim--hidden .mdc-dialog__scrim{opacity:0}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto;outline:0;transform:scale(0.8)}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}[dir=rtl] .mdc-dialog__surface,.mdc-dialog__surface[dir=rtl]{text-align:right}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-dialog__surface{outline:2px solid windowText}}.mdc-dialog__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-dialog__surface::before{border-color:CanvasText}}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.mdc-dialog__surface::before{content:none}}.mdc-dialog__title{display:block;margin-top:0;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:0 24px 9px}.mdc-dialog__title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mdc-dialog__title,.mdc-dialog__title[dir=rtl]{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{margin-bottom:1px;padding-bottom:15px}.mdc-dialog--fullscreen .mdc-dialog__header{align-items:baseline;border-bottom:1px solid rgba(0,0,0,0);display:inline-flex;justify-content:space-between;padding:0 24px 9px;z-index:1}@media screen and (forced-colors: active){.mdc-dialog--fullscreen .mdc-dialog__header{border-bottom-color:CanvasText}}.mdc-dialog--fullscreen .mdc-dialog__header .mdc-dialog__close{right:-12px}.mdc-dialog--fullscreen .mdc-dialog__title{margin-bottom:0;padding:0;border-bottom:0}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:0;margin-bottom:0}.mdc-dialog--fullscreen .mdc-dialog__close{top:5px}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top:1px solid rgba(0,0,0,0)}@media screen and (forced-colors: active){.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--fullscreen--titleless .mdc-dialog__close{margin-top:4px}.mdc-dialog--fullscreen--titleless.mdc-dialog--scrollable .mdc-dialog__close{margin-top:0}.mdc-dialog__content{flex-grow:1;box-sizing:border-box;margin:0;overflow:auto}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content,.mdc-dialog__header+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__title+.mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0)}@media screen and (forced-colors: active){.mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear,transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:none}.mdc-dialog--closing .mdc-dialog__surface{transform:none}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{opacity:1}.mdc-dialog--open .mdc-dialog__surface{transform:none}.mdc-dialog--open.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim{opacity:1}.mdc-dialog--open.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{transition:opacity 75ms linear}.mdc-dialog--open.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim{transition:opacity 150ms linear}.mdc-dialog__surface-scrim{display:none;opacity:0;position:absolute;width:100%;height:100%;z-index:1}.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{display:block}.mdc-dialog-scroll-lock{overflow:hidden}.mdc-dialog--no-content-padding .mdc-dialog__content{padding:0}.mdc-dialog--sheet .mdc-dialog__container .mdc-dialog__close{right:12px;top:9px;position:absolute;z-index:1}.mdc-dialog__scrim--removed{pointer-events:none}.mdc-dialog__scrim--removed .mdc-dialog__scrim,.mdc-dialog__scrim--removed .mdc-dialog__surface-scrim{display:none}.mat-mdc-dialog-content{max-height:65vh}.mat-mdc-dialog-container{position:static;display:block}.mat-mdc-dialog-container,.mat-mdc-dialog-container .mdc-dialog__container,.mat-mdc-dialog-container .mdc-dialog__surface{max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mat-mdc-dialog-container .mdc-dialog__surface{width:100%;height:100%}.mat-mdc-dialog-component-host{display:contents}.mat-mdc-dialog-container{--mdc-dialog-container-elevation: var(--mdc-dialog-container-elevation-shadow);outline:0}.mat-mdc-dialog-container .mdc-dialog__surface{background-color:var(--mdc-dialog-container-color, white)}.mat-mdc-dialog-container .mdc-dialog__surface{box-shadow:var(--mdc-dialog-container-elevation, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12))}.mat-mdc-dialog-container .mdc-dialog__surface{border-radius:var(--mdc-dialog-container-shape, 4px)}.mat-mdc-dialog-container .mdc-dialog__title{font-family:var(--mdc-dialog-subhead-font, Roboto, sans-serif);line-height:var(--mdc-dialog-subhead-line-height, 1.5rem);font-size:var(--mdc-dialog-subhead-size, 1rem);font-weight:var(--mdc-dialog-subhead-weight, 400);letter-spacing:var(--mdc-dialog-subhead-tracking, 0.03125em)}.mat-mdc-dialog-container .mdc-dialog__title{color:var(--mdc-dialog-subhead-color, rgba(0, 0, 0, 0.87))}.mat-mdc-dialog-container .mdc-dialog__content{font-family:var(--mdc-dialog-supporting-text-font, Roboto, sans-serif);line-height:var(--mdc-dialog-supporting-text-line-height, 1.5rem);font-size:var(--mdc-dialog-supporting-text-size, 1rem);font-weight:var(--mdc-dialog-supporting-text-weight, 400);letter-spacing:var(--mdc-dialog-supporting-text-tracking, 0.03125em)}.mat-mdc-dialog-container .mdc-dialog__content{color:var(--mdc-dialog-supporting-text-color, rgba(0, 0, 0, 0.6))}.mat-mdc-dialog-container .mdc-dialog__container{transition:opacity linear var(--mat-dialog-transition-duration, 0ms)}.mat-mdc-dialog-container .mdc-dialog__surface{transition:transform var(--mat-dialog-transition-duration, 0ms) 0ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-dialog-container._mat-animation-noopable .mdc-dialog__container,.mat-mdc-dialog-container._mat-animation-noopable .mdc-dialog__surface{transition:none}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 80vw);min-width:var(--mat-dialog-container-min-width, 0)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, 80vw)}}.mat-mdc-dialog-title{padding:var(--mat-dialog-headline-padding, 0 24px 9px)}.mat-mdc-dialog-content{display:block}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{padding:var(--mat-dialog-actions-padding, 8px);justify-content:var(--mat-dialog-actions-alignment, start)}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}',
        ],
        encapsulation: 2,
      }))
    let a = s
    return a
  })(),
  kn = '--mat-dialog-transition-duration'
function yn(a) {
  return a == null
    ? null
    : typeof a == 'number'
    ? a
    : a.endsWith('ms')
    ? ri(a.substring(0, a.length - 2))
    : a.endsWith('s')
    ? ri(a.substring(0, a.length - 1)) * 1e3
    : a === '0'
    ? 0
    : null
}
var Vt = (function (a) {
    return (
      (a[(a.OPEN = 0)] = 'OPEN'),
      (a[(a.CLOSING = 1)] = 'CLOSING'),
      (a[(a.CLOSED = 2)] = 'CLOSED'),
      a
    )
  })(Vt || {}),
  Zt = class {
    constructor(s, l, e) {
      ;(this._ref = s),
        (this._containerInstance = e),
        (this._afterOpened = new j()),
        (this._beforeClosed = new j()),
        (this._state = Vt.OPEN),
        (this.disableClose = l.disableClose),
        (this.id = s.id),
        s.addPanelClass('mat-mdc-dialog-panel'),
        e._animationStateChanged
          .pipe(
            Q((t) => t.state === 'opened'),
            ae(1),
          )
          .subscribe(() => {
            this._afterOpened.next(), this._afterOpened.complete()
          }),
        e._animationStateChanged
          .pipe(
            Q((t) => t.state === 'closed'),
            ae(1),
          )
          .subscribe(() => {
            clearTimeout(this._closeFallbackTimeout), this._finishDialogClose()
          }),
        s.overlayRef.detachments().subscribe(() => {
          this._beforeClosed.next(this._result),
            this._beforeClosed.complete(),
            this._finishDialogClose()
        }),
        xe(
          this.backdropClick(),
          this.keydownEvents().pipe(Q((t) => t.keyCode === 27 && !this.disableClose && !Ee(t))),
        ).subscribe((t) => {
          this.disableClose ||
            (t.preventDefault(), ms(this, t.type === 'keydown' ? 'keyboard' : 'mouse'))
        })
    }
    close(s) {
      ;(this._result = s),
        this._containerInstance._animationStateChanged
          .pipe(
            Q((l) => l.state === 'closing'),
            ae(1),
          )
          .subscribe((l) => {
            this._beforeClosed.next(s),
              this._beforeClosed.complete(),
              this._ref.overlayRef.detachBackdrop(),
              (this._closeFallbackTimeout = setTimeout(
                () => this._finishDialogClose(),
                l.totalTime + 100,
              ))
          }),
        (this._state = Vt.CLOSING),
        this._containerInstance._startExitAnimation()
    }
    afterOpened() {
      return this._afterOpened
    }
    afterClosed() {
      return this._ref.closed
    }
    beforeClosed() {
      return this._beforeClosed
    }
    backdropClick() {
      return this._ref.backdropClick
    }
    keydownEvents() {
      return this._ref.keydownEvents
    }
    updatePosition(s) {
      let l = this._ref.config.positionStrategy
      return (
        s && (s.left || s.right)
          ? s.left
            ? l.left(s.left)
            : l.right(s.right)
          : l.centerHorizontally(),
        s && (s.top || s.bottom)
          ? s.top
            ? l.top(s.top)
            : l.bottom(s.bottom)
          : l.centerVertically(),
        this._ref.updatePosition(),
        this
      )
    }
    updateSize(s = '', l = '') {
      return this._ref.updateSize(s, l), this
    }
    addPanelClass(s) {
      return this._ref.addPanelClass(s), this
    }
    removePanelClass(s) {
      return this._ref.removePanelClass(s), this
    }
    getState() {
      return this._state
    }
    _finishDialogClose() {
      ;(this._state = Vt.CLOSED),
        this._ref.close(this._result, { focusOrigin: this._closeInteractionType }),
        (this.componentInstance = null)
    }
  }
function ms(a, s, l) {
  return (a._closeInteractionType = s), a.close(l)
}
var fi = new T('MatMdcDialogData'),
  us = new T('mat-mdc-dialog-default-options'),
  ps = new T('mat-mdc-dialog-scroll-strategy', {
    providedIn: 'root',
    factory: () => {
      let a = g($)
      return () => a.scrollStrategies.block()
    },
  })
var _s = 0,
  Ne = (() => {
    let s = class s {
      get openDialogs() {
        return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel
      }
      get afterOpened() {
        return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel
      }
      _getAfterAllClosed() {
        let e = this._parentDialog
        return e ? e._getAfterAllClosed() : this._afterAllClosedAtThisLevel
      }
      constructor(e, t, i, n, r, h, o, c) {
        ;(this._overlay = e),
          (this._defaultOptions = n),
          (this._scrollStrategy = r),
          (this._parentDialog = h),
          (this._openDialogsAtThisLevel = []),
          (this._afterAllClosedAtThisLevel = new j()),
          (this._afterOpenedAtThisLevel = new j()),
          (this.dialogConfigClass = tt),
          (this.afterAllClosed = st(() =>
            this.openDialogs.length
              ? this._getAfterAllClosed()
              : this._getAfterAllClosed().pipe(re(void 0)),
          )),
          (this._dialog = t.get(pi)),
          (this._dialogRefConstructor = Zt),
          (this._dialogContainerType = ds),
          (this._dialogDataToken = fi)
      }
      open(e, t) {
        let i
        ;(t = N(N({}, this._defaultOptions || new tt()), t)),
          (t.id = t.id || `mat-mdc-dialog-${_s++}`),
          (t.scrollStrategy = t.scrollStrategy || this._scrollStrategy())
        let n = this._dialog.open(
          e,
          Xt(N({}, t), {
            positionStrategy: this._overlay
              .position()
              .global()
              .centerHorizontally()
              .centerVertically(),
            disableClose: !0,
            closeOnDestroy: !1,
            closeOnOverlayDetachments: !1,
            container: {
              type: this._dialogContainerType,
              providers: () => [
                { provide: this.dialogConfigClass, useValue: t },
                { provide: ke, useValue: t },
              ],
            },
            templateContext: () => ({ dialogRef: i }),
            providers: (r, h, o) => (
              (i = new this._dialogRefConstructor(r, t, o)),
              i.updatePosition(t?.position),
              [
                { provide: this._dialogContainerType, useValue: o },
                { provide: this._dialogDataToken, useValue: h.data },
                { provide: this._dialogRefConstructor, useValue: i },
              ]
            ),
          }),
        )
        return (
          (i.componentRef = n.componentRef),
          (i.componentInstance = n.componentInstance),
          this.openDialogs.push(i),
          this.afterOpened.next(i),
          i.afterClosed().subscribe(() => {
            let r = this.openDialogs.indexOf(i)
            r > -1 &&
              (this.openDialogs.splice(r, 1),
              this.openDialogs.length || this._getAfterAllClosed().next())
          }),
          i
        )
      }
      closeAll() {
        this._closeDialogs(this.openDialogs)
      }
      getDialogById(e) {
        return this.openDialogs.find((t) => t.id === e)
      }
      ngOnDestroy() {
        this._closeDialogs(this._openDialogsAtThisLevel),
          this._afterAllClosedAtThisLevel.complete(),
          this._afterOpenedAtThisLevel.complete()
      }
      _closeDialogs(e) {
        let t = e.length
        for (; t--; ) e[t].close()
      }
    }
    ;(s.ɵfac = function (t) {
      return new (t || s)(F($), F(le), F(Ei, 8), F(us, 8), F(ps), F(s, 12), F(St), F(ti, 8))
    }),
      (s.ɵprov = J({ token: s, factory: s.ɵfac, providedIn: 'root' }))
    let a = s
    return a
  })(),
  gs = 0
var fs = (() => {
    let s = class s {
      constructor(e, t, i) {
        ;(this._dialogRef = e), (this._elementRef = t), (this._dialog = i)
      }
      ngOnInit() {
        this._dialogRef || (this._dialogRef = vs(this._elementRef, this._dialog.openDialogs)),
          this._dialogRef &&
            Promise.resolve().then(() => {
              this._onAdd()
            })
      }
      ngOnDestroy() {
        this._dialogRef?._containerInstance &&
          Promise.resolve().then(() => {
            this._onRemove()
          })
      }
    }
    ;(s.ɵfac = function (t) {
      return new (t || s)(_(Zt, 8), _(G), _(Ne))
    }),
      (s.ɵdir = oe({ type: s, standalone: !0 }))
    let a = s
    return a
  })(),
  Gt = (() => {
    let s = class s extends fs {
      constructor() {
        super(...arguments), (this.id = `mat-mdc-dialog-title-${gs++}`)
      }
      _onAdd() {
        this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)
      }
      _onRemove() {
        this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)
      }
    }
    ;(s.ɵfac = (() => {
      let e
      return function (i) {
        return (e || (e = rt(s)))(i || s)
      }
    })()),
      (s.ɵdir = oe({
        type: s,
        selectors: [
          ['', 'mat-dialog-title', ''],
          ['', 'matDialogTitle', ''],
        ],
        hostAttrs: [1, 'mat-mdc-dialog-title', 'mdc-dialog__title'],
        hostVars: 1,
        hostBindings: function (t, i) {
          t & 2 && si('id', i.id)
        },
        inputs: { id: 'id' },
        exportAs: ['matDialogTitle'],
        standalone: !0,
        features: [Ve],
      }))
    let a = s
    return a
  })(),
  qt = (() => {
    let s = class s {}
    ;(s.ɵfac = function (t) {
      return new (t || s)()
    }),
      (s.ɵdir = oe({
        type: s,
        selectors: [
          ['', 'mat-dialog-content', ''],
          ['mat-dialog-content'],
          ['', 'matDialogContent', ''],
        ],
        hostAttrs: [1, 'mat-mdc-dialog-content', 'mdc-dialog__content'],
        standalone: !0,
      }))
    let a = s
    return a
  })()
function vs(a, s) {
  let l = a.nativeElement.parentElement
  for (; l && !l.classList.contains('mat-mdc-dialog-container'); ) l = l.parentElement
  return l ? s.find((e) => e.id === l.id) : null
}
var Wt = (() => {
  let s = class s {}
  ;(s.ɵfac = function (t) {
    return new (t || s)()
  }),
    (s.ɵmod = Me({ type: s })),
    (s.ɵinj = we({ providers: [Ne], imports: [vn, Ae, Ke, Pe, Pe] }))
  let a = s
  return a
})()
function ys(a, s) {
  if ((a & 1 && (m(0, 'mat-option', 8), f(1), d()), a & 2)) {
    let l = s.$implicit
    w('value', l), v(), We(l)
  }
}
function Ss(a, s) {
  if (a & 1) {
    let l = L()
    m(0, 'div', 9)(1, 'div', 10)(2, 'button', 11),
      x('click', function () {
        I(l)
        let t = k()
        return E(t.onClearFilter())
      }),
      f(3, ' Limpar Filtro '),
      d(),
      m(4, 'button', 12),
      f(5, ' Aplicar Filtro '),
      d()()()
  }
  if (a & 2) {
    let l = k()
    v(4), w('disabled', l.filterForm.invalid)
  }
}
var xs = (a) => ({ 'form-loading': a }),
  wn = (() => {
    let s = class s {
      constructor() {
        ;(this.isLoading = Z(!1)),
          (this.allCategories = Z([])),
          (this.activatedRoute = g(mt)),
          (this.router = g(ut)),
          (this.dialogModal = g(Ne)),
          (this.filterAdminService = g(Bt)),
          (this.searchForm = this.filterAdminService.searchForm),
          (this.categoryService = g($t)),
          (this.filterForm = new Tt({ category: new W('', [q.required]) }))
      }
      ngOnInit() {
        this.getCategories()
      }
      getQueryParam() {
        this.activatedRoute.queryParamMap.subscribe({
          next: (e) => {
            let t = e.get('category')
            t && this.filterForm.setValue({ category: t })
          },
        })
      }
      getCategories() {
        this.categoryService.categories().subscribe({
          next: (e) => {
            this.allCategories.set(e), this.getQueryParam()
          },
        })
      }
      onClearFilter() {
        this.router.navigate([]),
          this.dialogModal.closeAll(),
          this.searchForm.setValue(''),
          (this.filterAdminService.setOpenModal = !1)
      }
      onSubmit() {
        if (this.filterForm.valid) {
          let e = { search: '', category: this.filterForm.value.category }
          this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: e,
            queryParamsHandling: 'merge',
          }),
            this.dialogModal.closeAll(),
            (this.filterAdminService.setOpenModal = !1)
        }
      }
    }
    ;(s.ɵfac = function (t) {
      return new (t || s)()
    }),
      (s.ɵcmp = H({
        type: s,
        selectors: [['app-modal-filter']],
        standalone: !0,
        features: [B],
        decls: 13,
        vars: 5,
        consts: [
          ['mat-dialog-title', '', 1, 'mat__modal--title'],
          [1, 'mat__dialog--content-filter'],
          [3, 'formGroup', 'ngClass', 'ngSubmit'],
          [1, 'grid__container'],
          [1, 'grid__col'],
          [1, 'w-full'],
          ['name', 'category', 'formControlName', 'category'],
          ['class', 'grid__col w-full'],
          [3, 'value'],
          [1, 'grid__col', 'w-full'],
          [1, 'mat__button--send'],
          ['mat-flat-button', '', 'color', 'warn', 'type', 'button', 1, 'w-full', 3, 'click'],
          ['mat-flat-button', '', 'color', 'primary', 'type', 'submit', 1, 'w-full', 3, 'disabled'],
        ],
        template: function (t, i) {
          t & 1 &&
            (m(0, 'h2', 0),
            f(1, 'Filtro'),
            d(),
            m(2, 'mat-dialog-content', 1)(3, 'form', 2),
            x('ngSubmit', function () {
              return i.onSubmit()
            }),
            m(4, 'div', 3)(5, 'div', 4)(6, 'mat-form-field', 5)(7, 'mat-label'),
            f(8, 'Categoria'),
            d(),
            m(9, 'mat-select', 6),
            Ge(10, ys, 2, 2, 'mat-option', 8, Ze),
            d()()(),
            M(12, Ss, 6, 1, 'div', 7),
            d()()()),
            t & 2 &&
              (v(3),
              w('formGroup', i.filterForm)('ngClass', dt(3, xs, i.isLoading())),
              v(7),
              qe(i.allCategories()),
              v(2),
              te(12, i.filterForm.valid ? 12 : -1))
        },
        dependencies: [
          Wt,
          Gt,
          qt,
          Nt,
          Ot,
          Et,
          Pt,
          At,
          Ft,
          me,
          de,
          Rt,
          It,
          Dt,
          wt,
          jt,
          Lt,
          Ct,
          Te,
          bt,
        ],
        styles: [
          '[_nghost-%COMP%]{display:flex;width:480px;min-height:300px;box-sizing:border-box;flex-direction:column;align-items:flex-start;justify-content:center;background-color:#fff}@media (max-width: 768px){[_nghost-%COMP%]{width:100%}}.mat__modal--title[_ngcontent-%COMP%]{font-size:18px;font-weight:500}.mat__modal--subtitle[_ngcontent-%COMP%]{font-size:14px;font-weight:500;margin:0 0 10px}.mat__dialog--content-filter[_ngcontent-%COMP%]{width:100%;position:relative}.mat__dialog--content-filter[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:100%}.mat__dialog--content-filter[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .grid__container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(1,1fr);gap:10px}.mat__dialog--content-filter[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .mat__button--send[_ngcontent-%COMP%]{margin-top:30px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px}.mat__dialog--content-filter[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .mat__button--send[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{max-width:260px}',
        ],
      }))
    let a = s
    return a
  })()
var Yt = new T('ngx-mask config'),
  Dn = new T('new ngx-mask config'),
  In = new T('initial ngx-mask config'),
  Ms = {
    suffix: '',
    prefix: '',
    thousandSeparator: ' ',
    decimalMarker: ['.', ','],
    clearIfNotMatch: !1,
    showTemplate: !1,
    showMaskTyped: !1,
    placeHolderCharacter: '_',
    dropSpecialCharacters: !0,
    hiddenInput: void 0,
    shownMaskExpression: '',
    separatorLimit: '',
    allowNegativeNumbers: !1,
    validation: !0,
    specialCharacters: ['-', '/', '(', ')', '.', ':', ' ', '+', ',', '@', '[', ']', '"', "'"],
    leadZeroDateTime: !1,
    apm: !1,
    leadZero: !1,
    keepCharacterPositions: !1,
    triggerOnMaskChange: !1,
    inputTransformFn: (a) => a,
    outputTransformFn: (a) => a,
    maskFilled: new X(),
    patterns: {
      0: { pattern: new RegExp('\\d') },
      9: { pattern: new RegExp('\\d'), optional: !0 },
      X: { pattern: new RegExp('\\d'), symbol: '*' },
      A: { pattern: new RegExp('[a-zA-Z0-9]') },
      S: { pattern: new RegExp('[a-zA-Z]') },
      U: { pattern: new RegExp('[A-Z]') },
      L: { pattern: new RegExp('[a-z]') },
      d: { pattern: new RegExp('\\d') },
      m: { pattern: new RegExp('\\d') },
      M: { pattern: new RegExp('\\d') },
      H: { pattern: new RegExp('\\d') },
      h: { pattern: new RegExp('\\d') },
      s: { pattern: new RegExp('\\d') },
    },
  },
  ws = ['Hh:m0:s0', 'Hh:m0', 'm0:s0'],
  Ds = ['percent', 'Hh', 's0', 'm0', 'separator', 'd0/M0/0000', 'd0/M0', 'd0', 'M0'],
  Is = (() => {
    let s = class s {
      constructor() {
        ;(this._config = g(Yt)),
          (this.dropSpecialCharacters = this._config.dropSpecialCharacters),
          (this.hiddenInput = this._config.hiddenInput),
          (this.clearIfNotMatch = this._config.clearIfNotMatch),
          (this.specialCharacters = this._config.specialCharacters),
          (this.patterns = this._config.patterns),
          (this.prefix = this._config.prefix),
          (this.suffix = this._config.suffix),
          (this.thousandSeparator = this._config.thousandSeparator),
          (this.decimalMarker = this._config.decimalMarker),
          (this.showMaskTyped = this._config.showMaskTyped),
          (this.placeHolderCharacter = this._config.placeHolderCharacter),
          (this.validation = this._config.validation),
          (this.separatorLimit = this._config.separatorLimit),
          (this.allowNegativeNumbers = this._config.allowNegativeNumbers),
          (this.leadZeroDateTime = this._config.leadZeroDateTime),
          (this.leadZero = this._config.leadZero),
          (this.apm = this._config.apm),
          (this.inputTransformFn = this._config.inputTransformFn),
          (this.outputTransformFn = this._config.outputTransformFn),
          (this.keepCharacterPositions = this._config.keepCharacterPositions),
          (this._shift = new Set()),
          (this.plusOnePosition = !1),
          (this.maskExpression = ''),
          (this.actualValue = ''),
          (this.showKeepCharacterExp = ''),
          (this.shownMaskExpression = ''),
          (this.deletedSpecialCharacter = !1),
          (this._formatWithSeparators = (e, t, i, n) => {
            let r = [],
              h = ''
            if (Array.isArray(i)) {
              let y = new RegExp(
                i.map((C) => ('[\\^$.|?*+()'.indexOf(C) >= 0 ? `\\${C}` : C)).join('|'),
              )
              ;(r = e.split(y)), (h = e.match(y)?.[0] ?? '')
            } else (r = e.split(i)), (h = i)
            let o = r.length > 1 ? `${h}${r[1]}` : '',
              c = r[0] ?? '',
              u = this.separatorLimit.replace(/\s/g, '')
            u &&
              +u &&
              (c[0] === '-'
                ? (c = `-${c.slice(1, c.length).slice(0, u.length)}`)
                : (c = c.slice(0, u.length)))
            let S = /(\d+)(\d{3})/
            for (; t && S.test(c); ) c = c.replace(S, '$1' + t + '$2')
            return n === void 0 ? c + o : n === 0 ? c : c + o.substring(0, n + 1)
          }),
          (this.percentage = (e) => {
            let t = e.replace(',', '.'),
              i = Number(t)
            return !isNaN(i) && i >= 0 && i <= 100
          }),
          (this.getPrecision = (e) => {
            let t = e.split('.')
            return t.length > 1 ? Number(t[t.length - 1]) : 1 / 0
          }),
          (this.checkAndRemoveSuffix = (e) => {
            for (let t = this.suffix?.length - 1; t >= 0; t--) {
              let i = this.suffix.substring(t, this.suffix?.length)
              if (
                e.includes(i) &&
                t !== this.suffix?.length - 1 &&
                (t - 1 < 0 || !e.includes(this.suffix.substring(t - 1, this.suffix?.length)))
              )
                return e.replace(i, '')
            }
            return e
          }),
          (this.checkInputPrecision = (e, t, i) => {
            if (t < 1 / 0) {
              if (Array.isArray(i)) {
                let o = i.find((c) => c !== this.thousandSeparator)
                i = o || i[0]
              }
              let n = new RegExp(this._charToRegExpExpression(i) + `\\d{${t}}.*$`),
                r = e.match(n),
                h = (r && r[0]?.length) ?? 0
              if (h - 1 > t) {
                let o = h - 1 - t
                e = e.substring(0, e.length - o)
              }
              t === 0 &&
                this._compareOrIncludes(e[e.length - 1], i, this.thousandSeparator) &&
                (e = e.substring(0, e.length - 1))
            }
            return e
          })
      }
      applyMaskWithPattern(e, t) {
        let [i, n] = t
        return (this.customPattern = n), this.applyMask(e, i)
      }
      applyMask(e, t, i = 0, n = !1, r = !1, h = () => {}) {
        if (!t || typeof e != 'string') return ''
        let o = 0,
          c = '',
          u = !1,
          S = !1,
          y = 1,
          C = !1
        e.slice(0, this.prefix.length) === this.prefix &&
          (e = e.slice(this.prefix.length, e.length)),
          this.suffix && e?.length > 0 && (e = this.checkAndRemoveSuffix(e)),
          e === '(' && this.prefix && (e = '')
        let D = e.toString().split('')
        if (
          (this.allowNegativeNumbers && e.slice(o, o + 1) === '-' && (c += e.slice(o, o + 1)),
          t === 'IP')
        ) {
          let b = e.split('.')
          ;(this.ipError = this._validIP(b)), (t = '099.099.099.099')
        }
        let z = []
        for (let b = 0; b < e.length; b++) e[b]?.match('\\d') && z.push(e[b] ?? '')
        if (
          (t === 'CPF_CNPJ' &&
            ((this.cpfCnpjError = z.length !== 11 && z.length !== 14),
            z.length > 11 ? (t = '00.000.000/0000-00') : (t = '000.000.000-00')),
          t.startsWith('percent'))
        ) {
          if (e.match('[a-z]|[A-Z]') || (e.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,\/.]/) && !r)) {
            e = this._stripToDecimal(e)
            let V = this.getPrecision(t)
            e = this.checkInputPrecision(e, V, this.decimalMarker)
          }
          let b = typeof this.decimalMarker == 'string' ? this.decimalMarker : '.'
          if (e.indexOf(b) > 0 && !this.percentage(e.substring(0, e.indexOf(b)))) {
            let V = e.substring(0, e.indexOf(b) - 1)
            this.allowNegativeNumbers &&
              e.slice(o, o + 1) === '-' &&
              !r &&
              (V = e.substring(0, e.indexOf(b))),
              (e = `${V}${e.substring(e.indexOf(b), e.length)}`)
          }
          let p = ''
          this.allowNegativeNumbers && e.slice(o, o + 1) === '-'
            ? (p = e.slice(o + 1, o + e.length))
            : (p = e),
            this.percentage(p)
              ? (c = this._splitPercentZero(e))
              : (c = this._splitPercentZero(e.substring(0, e.length - 1)))
        } else if (t.startsWith('separator')) {
          ;(e.match('[w\u0430-\u044F\u0410-\u042F]') ||
            e.match('[\u0401\u0451\u0410-\u044F]') ||
            e.match('[a-z]|[A-Z]') ||
            e.match(/[-@#!$%\\^&*()_£¬'+|~=`{}\]:";<>.?/]/) ||
            e.match('[^A-Za-z0-9,]')) &&
            (e = this._stripToDecimal(e))
          let b = this.getPrecision(t),
            p = Array.isArray(this.decimalMarker) ? '.' : this.decimalMarker
          b === 0
            ? (e = this.allowNegativeNumbers
                ? e.length > 2 &&
                  e[0] === '-' &&
                  e[1] === '0' &&
                  e[2] !== this.thousandSeparator &&
                  e[2] !== ',' &&
                  e[2] !== '.'
                  ? '-' + e.slice(2, e.length)
                  : e[0] === '0' &&
                    e.length > 1 &&
                    e[1] !== this.thousandSeparator &&
                    e[1] !== ',' &&
                    e[1] !== '.'
                  ? e.slice(1, e.length)
                  : e
                : e.length > 1 &&
                  e[0] === '0' &&
                  e[1] !== this.thousandSeparator &&
                  e[1] !== ',' &&
                  e[1] !== '.'
                ? e.slice(1, e.length)
                : e)
            : (e[0] === p &&
                e.length > 1 &&
                ((e = '0' + e.slice(0, e.length + 1)), (this.plusOnePosition = !0)),
              e[0] === '0' &&
                e[1] !== p &&
                e[1] !== this.thousandSeparator &&
                ((e = e.length > 1 ? e.slice(0, 1) + p + e.slice(1, e.length + 1) : e),
                (this.plusOnePosition = !0)),
              this.allowNegativeNumbers &&
                e[0] === '-' &&
                (e[1] === p || e[1] === '0') &&
                ((e =
                  e[1] === p && e.length > 2
                    ? e.slice(0, 1) + '0' + e.slice(1, e.length)
                    : e[1] === '0' && e.length > 2 && e[2] !== p
                    ? e.slice(0, 2) + p + e.slice(2, e.length)
                    : e),
                (this.plusOnePosition = !0))),
            r &&
              (e[0] === '0' &&
                e[1] === this.decimalMarker &&
                (e[i] === '0' || e[i] === this.decimalMarker) &&
                (e = e.slice(2, e.length)),
              e[0] === '-' &&
                e[1] === '0' &&
                e[2] === this.decimalMarker &&
                (e[i] === '0' || e[i] === this.decimalMarker) &&
                (e = '-' + e.slice(3, e.length)),
              (e = this._compareOrIncludes(
                e[e.length - 1],
                this.decimalMarker,
                this.thousandSeparator,
              )
                ? e.slice(0, e.length - 1)
                : e))
          let V = this._charToRegExpExpression(this.thousandSeparator),
            P = '@#!$%^&*()_+|~=`{}\\[\\]:\\s,\\.";<>?\\/'.replace(V, '')
          if (Array.isArray(this.decimalMarker))
            for (let U of this.decimalMarker) P = P.replace(this._charToRegExpExpression(U), '')
          else P = P.replace(this._charToRegExpExpression(this.decimalMarker), '')
          let K = new RegExp('[' + P + ']')
          e.match(K) && (e = e.substring(0, e.length - 1)),
            (e = this.checkInputPrecision(e, b, this.decimalMarker))
          let Y = e.replace(new RegExp(V, 'g'), '')
          c = this._formatWithSeparators(Y, this.thousandSeparator, this.decimalMarker, b)
          let Se = c.indexOf(',') - e.indexOf(','),
            O = c.length - e.length
          if (O > 0 && c[i] !== this.thousandSeparator) {
            S = !0
            let U = 0
            do this._shift.add(i + U), U++
            while (U < O)
          } else
            c[i - 1] === this.decimalMarker || O === -4 || O === -3 || c[i] === ','
              ? (this._shift.clear(), this._shift.add(i - 1))
              : (Se !== 0 && i > 0 && !(c.indexOf(',') >= i && i > 3)) ||
                (!(c.indexOf('.') >= i && i > 3) && O <= 0)
              ? (this._shift.clear(), (S = !0), (y = O), (i += O), this._shift.add(i))
              : this._shift.clear()
        } else
          for (let b = 0, p = D[0]; b < D.length && o !== t.length; b++, p = D[b] ?? '') {
            let V = '*' in this.patterns
            if (this._checkSymbolMask(p, t[o] ?? '') && t[o + 1] === '?') (c += p), (o += 2)
            else if (t[o + 1] === '*' && u && this._checkSymbolMask(p, t[o + 2] ?? ''))
              (c += p), (o += 3), (u = !1)
            else if (this._checkSymbolMask(p, t[o] ?? '') && t[o + 1] === '*' && !V)
              (c += p), (u = !0)
            else if (t[o + 1] === '?' && this._checkSymbolMask(p, t[o + 2] ?? ''))
              (c += p), (o += 3)
            else if (this._checkSymbolMask(p, t[o] ?? '')) {
              if (t[o] === 'H' && (this.apm ? Number(p) > 9 : Number(p) > 2)) {
                ;(i = this.leadZeroDateTime ? i : i + 1),
                  (o += 1),
                  this._shiftStep(t, o, D.length),
                  b--,
                  this.leadZeroDateTime && (c += '0')
                continue
              }
              if (
                t[o] === 'h' &&
                (this.apm
                  ? (c.length === 1 && Number(c) > 1) ||
                    (c === '1' && Number(p) > 2) ||
                    (e.slice(o - 1, o).length === 1 && Number(e.slice(o - 1, o)) > 2) ||
                    (e.slice(o - 1, o) === '1' && Number(p) > 2)
                  : (c === '2' && Number(p) > 3) ||
                    ((c.slice(o - 2, o) === '2' ||
                      c.slice(o - 3, o) === '2' ||
                      c.slice(o - 4, o) === '2' ||
                      c.slice(o - 1, o) === '2') &&
                      Number(p) > 3 &&
                      o > 10))
              ) {
                ;(i = i + 1), (o += 1), b--
                continue
              }
              if ((t[o] === 'm' || t[o] === 's') && Number(p) > 5) {
                ;(i = this.leadZeroDateTime ? i : i + 1),
                  (o += 1),
                  this._shiftStep(t, o, D.length),
                  b--,
                  this.leadZeroDateTime && (c += '0')
                continue
              }
              let P = 31,
                K = e[o],
                Y = e[o + 1],
                Se = e[o + 2],
                O = e[o - 1],
                U = e[o - 2],
                An = e[o - 3],
                _e = e.slice(o - 3, o - 1),
                it = e.slice(o - 1, o + 1),
                je = e.slice(o, o + 2),
                Qt = e.slice(o - 2, o)
              if (t[o] === 'd') {
                let Ci = t.slice(0, 2) === 'M0',
                  Kt = t.slice(0, 2) === 'M0' && this.specialCharacters.includes(U)
                if (
                  (Number(p) > 3 && this.leadZeroDateTime) ||
                  (!Ci &&
                    (Number(je) > P || Number(it) > P || this.specialCharacters.includes(Y))) ||
                  (Kt
                    ? Number(it) > P ||
                      (!this.specialCharacters.includes(K) &&
                        this.specialCharacters.includes(Se)) ||
                      this.specialCharacters.includes(K)
                    : Number(je) > P || this.specialCharacters.includes(Y))
                ) {
                  ;(i = this.leadZeroDateTime ? i : i + 1),
                    (o += 1),
                    this._shiftStep(t, o, D.length),
                    b--,
                    this.leadZeroDateTime && (c += '0')
                  continue
                }
              }
              if (t[o] === 'M') {
                let Kt =
                    o === 0 &&
                    (Number(p) > 2 || Number(je) > 12 || this.specialCharacters.includes(Y)),
                  Fn = t.slice(o + 2, o + 3),
                  Rn =
                    _e.includes(Fn) &&
                    ((this.specialCharacters.includes(U) &&
                      Number(it) > 12 &&
                      !this.specialCharacters.includes(K)) ||
                      this.specialCharacters.includes(K) ||
                      (this.specialCharacters.includes(An) &&
                        Number(Qt) > 12 &&
                        !this.specialCharacters.includes(O)) ||
                      this.specialCharacters.includes(O)),
                  Nn =
                    Number(_e) <= P &&
                    !this.specialCharacters.includes(_e) &&
                    this.specialCharacters.includes(O) &&
                    (Number(je) > 12 || this.specialCharacters.includes(Y)),
                  Ln =
                    (Number(je) > 12 && o === 5) || (this.specialCharacters.includes(Y) && o === 5),
                  jn =
                    Number(_e) > P &&
                    !this.specialCharacters.includes(_e) &&
                    !this.specialCharacters.includes(Qt) &&
                    Number(Qt) > 12,
                  Hn =
                    Number(_e) <= P &&
                    !this.specialCharacters.includes(_e) &&
                    !this.specialCharacters.includes(O) &&
                    Number(it) > 12
                if (
                  (Number(p) > 1 && this.leadZeroDateTime) ||
                  Kt ||
                  Rn ||
                  Hn ||
                  jn ||
                  Nn ||
                  (Ln && !this.leadZeroDateTime)
                ) {
                  ;(i = this.leadZeroDateTime ? i : i + 1),
                    (o += 1),
                    this._shiftStep(t, o, D.length),
                    b--,
                    this.leadZeroDateTime && (c += '0')
                  continue
                }
              }
              ;(c += p), o++
            } else
              (p === ' ' && t[o] === ' ') || (p === '/' && t[o] === '/')
                ? ((c += p), o++)
                : this.specialCharacters.indexOf(t[o] ?? '') !== -1
                ? ((c += t[o]), o++, this._shiftStep(t, o, D.length), b--)
                : t[o] === '9' && this.showMaskTyped
                ? this._shiftStep(t, o, D.length)
                : this.patterns[t[o] ?? ''] && this.patterns[t[o] ?? '']?.optional
                ? (D[o] &&
                    t !== '099.099.099.099' &&
                    t !== '000.000.000-00' &&
                    t !== '00.000.000/0000-00' &&
                    !t.match(/^9+\.0+$/) &&
                    !this.patterns[t[o] ?? '']?.optional &&
                    (c += D[o]),
                  t.includes('9*') && t.includes('0*') && o++,
                  o++,
                  b--)
                : (this.maskExpression[o + 1] === '*' &&
                    this._findSpecialChar(this.maskExpression[o + 2] ?? '') &&
                    this._findSpecialChar(p) === this.maskExpression[o + 2] &&
                    u) ||
                  (this.maskExpression[o + 1] === '?' &&
                    this._findSpecialChar(this.maskExpression[o + 2] ?? '') &&
                    this._findSpecialChar(p) === this.maskExpression[o + 2] &&
                    u)
                ? ((o += 3), (c += p))
                : this.showMaskTyped &&
                  this.specialCharacters.indexOf(p) < 0 &&
                  p !== this.placeHolderCharacter &&
                  this.placeHolderCharacter.length === 1 &&
                  (C = !0)
          }
        c.length + 1 === t.length &&
          this.specialCharacters.indexOf(t[t.length - 1] ?? '') !== -1 &&
          (c += t[t.length - 1])
        let ue = i + 1
        for (; this._shift.has(ue); ) y++, ue++
        let pe = n && !t.startsWith('separator') ? o : this._shift.has(i) ? y : 0
        C && pe--, h(pe, S), y < 0 && this._shift.clear()
        let Le = !1
        r && (Le = D.every((b) => this.specialCharacters.includes(b)))
        let ye = `${this.prefix}${Le ? '' : c}${this.showMaskTyped ? '' : this.suffix}`
        if (
          (c.length === 0 && (ye = this.dropSpecialCharacters ? `${c}` : `${this.prefix}${c}`),
          c.includes('-') && this.prefix && this.allowNegativeNumbers)
        ) {
          if (r && c === '-') return ''
          ye = `-${this.prefix}${c.split('-').join('')}${this.suffix}`
        }
        return ye
      }
      _findDropSpecialChar(e) {
        return Array.isArray(this.dropSpecialCharacters)
          ? this.dropSpecialCharacters.find((t) => t === e)
          : this._findSpecialChar(e)
      }
      _findSpecialChar(e) {
        return this.specialCharacters.find((t) => t === e)
      }
      _checkSymbolMask(e, t) {
        return (
          (this.patterns = this.customPattern ? this.customPattern : this.patterns),
          (this.patterns[t]?.pattern && this.patterns[t]?.pattern.test(e)) ?? !1
        )
      }
      _stripToDecimal(e) {
        return e
          .split('')
          .filter((t, i) => {
            let n =
              typeof this.decimalMarker == 'string'
                ? t === this.decimalMarker
                : this.decimalMarker.includes(t)
            return (
              t.match('^-?\\d') ||
              t === this.thousandSeparator ||
              n ||
              (t === '-' && i === 0 && this.allowNegativeNumbers)
            )
          })
          .join('')
      }
      _charToRegExpExpression(e) {
        return e && (e === ' ' ? '\\s' : '[\\^$.|?*+()'.indexOf(e) >= 0 ? `\\${e}` : e)
      }
      _shiftStep(e, t, i) {
        let n = /[*?]/g.test(e.slice(0, t)) ? i : t
        this._shift.add(n + this.prefix.length || 0)
      }
      _compareOrIncludes(e, t, i) {
        return Array.isArray(t) ? t.filter((n) => n !== i).includes(e) : e === t
      }
      _validIP(e) {
        return !(
          e.length === 4 &&
          !e.some((t, i) =>
            e.length !== i + 1
              ? t === '' || Number(t) > 255
              : t === '' || Number(t.substring(0, 3)) > 255,
          )
        )
      }
      _splitPercentZero(e) {
        let t =
          typeof this.decimalMarker == 'string' ? e.indexOf(this.decimalMarker) : e.indexOf('.')
        if (t === -1) {
          let i = parseInt(e, 10)
          return isNaN(i) ? '' : i.toString()
        } else {
          let i = parseInt(e.substring(0, t), 10),
            n = e.substring(t + 1),
            r = isNaN(i) ? '' : i.toString(),
            h = typeof this.decimalMarker == 'string' ? this.decimalMarker : '.'
          return r === '' ? '' : r + h + n
        }
      }
    }
    ;(s.ɵfac = function (t) {
      return new (t || s)()
    }),
      (s.ɵprov = J({ token: s, factory: s.ɵfac }))
    let a = s
    return a
  })(),
  vi = (() => {
    let s = class s extends Is {
      constructor() {
        super(...arguments),
          (this.isNumberValue = !1),
          (this.maskIsShown = ''),
          (this.selStart = null),
          (this.selEnd = null),
          (this.writingValue = !1),
          (this.maskChanged = !1),
          (this._maskExpressionArray = []),
          (this.triggerOnMaskChange = !1),
          (this._previousValue = ''),
          (this._currentValue = ''),
          (this._emitValue = !1),
          (this.onChange = (e) => {}),
          (this._elementRef = g(G, { optional: !0 })),
          (this.document = g(se)),
          (this._config = g(Yt)),
          (this._renderer = g(Si, { optional: !0 }))
      }
      applyMask(e, t, i = 0, n = !1, r = !1, h = () => {}) {
        if (!t) return e !== this.actualValue ? this.actualValue : e
        if (
          ((this.maskIsShown = this.showMaskTyped ? this.showMaskInInput() : ''),
          this.maskExpression === 'IP' &&
            this.showMaskTyped &&
            (this.maskIsShown = this.showMaskInInput(e || '#')),
          this.maskExpression === 'CPF_CNPJ' &&
            this.showMaskTyped &&
            (this.maskIsShown = this.showMaskInInput(e || '#')),
          !e && this.showMaskTyped)
        )
          return this.formControlResult(this.prefix), this.prefix + this.maskIsShown + this.suffix
        let o = e && typeof this.selStart == 'number' ? e[this.selStart] ?? '' : '',
          c = ''
        if (this.hiddenInput !== void 0 && !this.writingValue) {
          let C = e && e.length === 1 ? e.split('') : this.actualValue.split('')
          typeof this.selStart == 'object' && typeof this.selEnd == 'object'
            ? ((this.selStart = Number(this.selStart)), (this.selEnd = Number(this.selEnd)))
            : e !== '' && C.length
            ? typeof this.selStart == 'number' &&
              typeof this.selEnd == 'number' &&
              (e.length > C.length
                ? C.splice(this.selStart, 0, o)
                : e.length < C.length &&
                  (C.length - e.length === 1
                    ? r
                      ? C.splice(this.selStart - 1, 1)
                      : C.splice(e.length - 1, 1)
                    : C.splice(this.selStart, this.selEnd - this.selStart)))
            : (C = []),
            this.showMaskTyped && (this.hiddenInput || (e = this.removeMask(e))),
            (c =
              this.actualValue.length && C.length <= e.length
                ? this.shiftTypedSymbols(C.join(''))
                : e)
        }
        if (
          (n && (this.hiddenInput || !this.hiddenInput) && (c = e),
          r &&
            this.specialCharacters.indexOf(this.maskExpression[i] ?? '') !== -1 &&
            this.showMaskTyped &&
            (c = this._currentValue),
          this.deletedSpecialCharacter &&
            i &&
            (this.specialCharacters.includes(this.actualValue.slice(i, i + 1))
              ? (i = i + 1)
              : t.slice(i - 1, i + 1) !== 'M0' && (i = i - 2),
            (this.deletedSpecialCharacter = !1)),
          this.showMaskTyped &&
            this.placeHolderCharacter.length === 1 &&
            !this.leadZeroDateTime &&
            (e = this.removeMask(e)),
          this.maskChanged ? (c = e) : (c = c && c.length ? c : e),
          this.showMaskTyped && this.keepCharacterPositions && this.actualValue && !n)
        ) {
          let C = this.dropSpecialCharacters ? this.removeMask(this.actualValue) : this.actualValue
          return (
            this.formControlResult(C),
            this.actualValue ? this.actualValue : this.prefix + this.maskIsShown + this.suffix
          )
        }
        let u = super.applyMask(c, t, i, n, r, h)
        if (
          ((this.actualValue = this.getActualValue(u)),
          this.thousandSeparator === '.' &&
            this.decimalMarker === '.' &&
            (this.decimalMarker = ','),
          this.maskExpression.startsWith('separator') &&
            this.dropSpecialCharacters === !0 &&
            (this.specialCharacters = this.specialCharacters.filter(
              (C) => !this._compareOrIncludes(C, this.decimalMarker, this.thousandSeparator),
            )),
          (u || u === '') &&
            ((this._previousValue = this._currentValue),
            (this._currentValue = u),
            (this._emitValue =
              this._previousValue !== this._currentValue ||
              this.maskChanged ||
              (this._previousValue === this._currentValue && n))),
          this._emitValue && this.formControlResult(u),
          !this.showMaskTyped || (this.showMaskTyped && this.hiddenInput))
        )
          return this.hiddenInput
            ? r
              ? this.hideInput(u, this.maskExpression)
              : this.hideInput(u, this.maskExpression) + this.maskIsShown.slice(u.length)
            : u
        let S = u.length,
          y = this.prefix + this.maskIsShown + this.suffix
        if (this.maskExpression.includes('H')) {
          let C = this._numberSkipedSymbols(u)
          return u + y.slice(S + C)
        } else if (this.maskExpression === 'IP' || this.maskExpression === 'CPF_CNPJ') return u + y
        return u + y.slice(S)
      }
      _numberSkipedSymbols(e) {
        let t = /(^|\D)(\d\D)/g,
          i = t.exec(e),
          n = 0
        for (; i != null; ) (n += 1), (i = t.exec(e))
        return n
      }
      applyValueChanges(e, t, i, n = () => {}) {
        let r = this._elementRef?.nativeElement
        r &&
          ((r.value = this.applyMask(r.value, this.maskExpression, e, t, i, n)),
          r !== this._getActiveElement() && this.clearIfNotMatchFn())
      }
      hideInput(e, t) {
        return e
          .split('')
          .map((i, n) =>
            this.patterns && this.patterns[t[n] ?? ''] && this.patterns[t[n] ?? '']?.symbol
              ? this.patterns[t[n] ?? '']?.symbol
              : i,
          )
          .join('')
      }
      getActualValue(e) {
        let t = e.split('').filter((i, n) => {
          let r = this.maskExpression[n] ?? ''
          return this._checkSymbolMask(i, r) || (this.specialCharacters.includes(r) && i === r)
        })
        return t.join('') === e ? t.join('') : e
      }
      shiftTypedSymbols(e) {
        let t = ''
        return (
          (e &&
            e.split('').map((n, r) => {
              if (
                this.specialCharacters.includes(e[r + 1] ?? '') &&
                e[r + 1] !== this.maskExpression[r + 1]
              )
                return (t = n), e[r + 1]
              if (t.length) {
                let h = t
                return (t = ''), h
              }
              return n
            })) ||
          []
        ).join('')
      }
      numberToString(e) {
        return (!e && e !== 0) ||
          (this.maskExpression.startsWith('separator') &&
            (this.leadZero || !this.dropSpecialCharacters)) ||
          (this.maskExpression.startsWith('separator') &&
            this.separatorLimit.length > 14 &&
            String(e).length > 14)
          ? String(e)
          : Number(e)
              .toLocaleString('fullwide', { useGrouping: !1, maximumFractionDigits: 20 })
              .replace('/-/', '-')
      }
      showMaskInInput(e) {
        if (this.showMaskTyped && this.shownMaskExpression) {
          if (this.maskExpression.length !== this.shownMaskExpression.length)
            throw new Error('Mask expression must match mask placeholder length')
          return this.shownMaskExpression
        } else if (this.showMaskTyped) {
          if (e) {
            if (this.maskExpression === 'IP') return this._checkForIp(e)
            if (this.maskExpression === 'CPF_CNPJ') return this._checkForCpfCnpj(e)
          }
          return this.placeHolderCharacter.length === this.maskExpression.length
            ? this.placeHolderCharacter
            : this.maskExpression.replace(/\w/g, this.placeHolderCharacter)
        }
        return ''
      }
      clearIfNotMatchFn() {
        let e = this._elementRef?.nativeElement
        e &&
          this.clearIfNotMatch &&
          this.prefix.length + this.maskExpression.length + this.suffix.length !==
            e.value.replace(this.placeHolderCharacter, '').length &&
          ((this.formElementProperty = ['value', '']), this.applyMask('', this.maskExpression))
      }
      set formElementProperty([e, t]) {
        !this._renderer ||
          !this._elementRef ||
          Promise.resolve().then(() =>
            this._renderer?.setProperty(this._elementRef?.nativeElement, e, t),
          )
      }
      checkDropSpecialCharAmount(e) {
        return e.split('').filter((i) => this._findDropSpecialChar(i)).length
      }
      removeMask(e) {
        return this._removeMask(
          this._removeSuffix(this._removePrefix(e)),
          this.specialCharacters.concat('_').concat(this.placeHolderCharacter),
        )
      }
      _checkForIp(e) {
        if (e === '#')
          return `${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}`
        let t = []
        for (let i = 0; i < e.length; i++) {
          let n = e[i] ?? ''
          n && n.match('\\d') && t.push(n)
        }
        return t.length <= 3
          ? `${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}`
          : t.length > 3 && t.length <= 6
          ? `${this.placeHolderCharacter}.${this.placeHolderCharacter}`
          : t.length > 6 && t.length <= 9
          ? this.placeHolderCharacter
          : (t.length > 9 && t.length <= 12, '')
      }
      _checkForCpfCnpj(e) {
        let t = `${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}-${this.placeHolderCharacter}${this.placeHolderCharacter}`,
          i = `${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}/${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}-${this.placeHolderCharacter}${this.placeHolderCharacter}`
        if (e === '#') return t
        let n = []
        for (let r = 0; r < e.length; r++) {
          let h = e[r] ?? ''
          h && h.match('\\d') && n.push(h)
        }
        return n.length <= 3
          ? t.slice(n.length, t.length)
          : n.length > 3 && n.length <= 6
          ? t.slice(n.length + 1, t.length)
          : n.length > 6 && n.length <= 9
          ? t.slice(n.length + 2, t.length)
          : n.length > 9 && n.length < 11
          ? t.slice(n.length + 3, t.length)
          : n.length === 11
          ? ''
          : n.length === 12
          ? e.length === 17
            ? i.slice(16, i.length)
            : i.slice(15, i.length)
          : n.length > 12 && n.length <= 14
          ? i.slice(n.length + 4, i.length)
          : ''
      }
      _getActiveElement(e = this.document) {
        let t = e?.activeElement?.shadowRoot
        return t?.activeElement ? this._getActiveElement(t) : e.activeElement
      }
      formControlResult(e) {
        if (this.writingValue || (!this.triggerOnMaskChange && this.maskChanged)) {
          this.maskChanged &&
            this.onChange(
              this.outputTransformFn(
                this._toNumber(this._checkSymbols(this._removeSuffix(this._removePrefix(e)))),
              ),
            ),
            (this.maskChanged = !1)
          return
        }
        Array.isArray(this.dropSpecialCharacters)
          ? this.onChange(
              this.outputTransformFn(
                this._toNumber(
                  this._checkSymbols(
                    this._removeMask(
                      this._removeSuffix(this._removePrefix(e)),
                      this.dropSpecialCharacters,
                    ),
                  ),
                ),
              ),
            )
          : this.dropSpecialCharacters || (!this.dropSpecialCharacters && this.prefix === e)
          ? this.onChange(
              this.outputTransformFn(
                this._toNumber(this._checkSymbols(this._removeSuffix(this._removePrefix(e)))),
              ),
            )
          : this.onChange(this.outputTransformFn(this._toNumber(e)))
      }
      _toNumber(e) {
        if (
          !this.isNumberValue ||
          e === '' ||
          (this.maskExpression.startsWith('separator') &&
            (this.leadZero || !this.dropSpecialCharacters))
        )
          return e
        if (String(e).length > 16 && this.separatorLimit.length > 14) return String(e)
        let t = Number(e)
        if (this.maskExpression.startsWith('separator') && Number.isNaN(t)) {
          let i = String(e).replace(',', '.')
          return Number(i)
        }
        return Number.isNaN(t) ? e : t
      }
      _removeMask(e, t) {
        return this.maskExpression.startsWith('percent') && e.includes('.')
          ? e
          : e && e.replace(this._regExpForRemove(t), '')
      }
      _removePrefix(e) {
        return this.prefix ? e && e.replace(this.prefix, '') : e
      }
      _removeSuffix(e) {
        return this.suffix ? e && e.replace(this.suffix, '') : e
      }
      _retrieveSeparatorValue(e) {
        let t = Array.isArray(this.dropSpecialCharacters)
          ? this.specialCharacters.filter((i) => this.dropSpecialCharacters.includes(i))
          : this.specialCharacters
        return (
          !this.deletedSpecialCharacter &&
            this._checkPatternForSpace() &&
            e.includes(' ') &&
            this.maskExpression.includes('*') &&
            (t = t.filter((i) => i !== ' ')),
          this._removeMask(e, t)
        )
      }
      _regExpForRemove(e) {
        return new RegExp(e.map((t) => `\\${t}`).join('|'), 'gi')
      }
      _replaceDecimalMarkerToDot(e) {
        let t = Array.isArray(this.decimalMarker) ? this.decimalMarker : [this.decimalMarker]
        return e.replace(this._regExpForRemove(t), '.')
      }
      _checkSymbols(e) {
        if (e === '') return e
        this.maskExpression.startsWith('percent') &&
          this.decimalMarker === ',' &&
          (e = e.replace(',', '.'))
        let t = this._retrieveSeparatorPrecision(this.maskExpression),
          i = this._replaceDecimalMarkerToDot(this._retrieveSeparatorValue(e))
        return this.isNumberValue && t
          ? e === this.decimalMarker
            ? null
            : this.separatorLimit.length > 14
            ? String(i)
            : this._checkPrecision(this.maskExpression, i)
          : i
      }
      _checkPatternForSpace() {
        for (let e in this.patterns)
          if (this.patterns[e] && this.patterns[e]?.hasOwnProperty('pattern')) {
            let t = this.patterns[e]?.pattern.toString(),
              i = this.patterns[e]?.pattern
            if (t?.includes(' ') && i?.test(this.maskExpression)) return !0
          }
        return !1
      }
      _retrieveSeparatorPrecision(e) {
        let t = e.match(new RegExp('^separator\\.([^d]*)'))
        return t ? Number(t[1]) : null
      }
      _checkPrecision(e, t) {
        let i = e.slice(10, 11)
        return e.indexOf('2') > 0 || (this.leadZero && Number(i) > 1)
          ? (this.decimalMarker === ',' && this.leadZero && (t = t.replace(',', '.')),
            this.leadZero ? Number(t).toFixed(Number(i)) : Number(t).toFixed(2))
          : this.numberToString(t)
      }
      _repeatPatternSymbols(e) {
        return (
          (e.match(/{[0-9]+}/) &&
            e.split('').reduce((t, i, n) => {
              if (((this._start = i === '{' ? n : this._start), i !== '}'))
                return this._findSpecialChar(i) ? t + i : t
              this._end = n
              let r = Number(e.slice(this._start + 1, this._end)),
                h = new Array(r + 1).join(e[this._start - 1])
              if (e.slice(0, this._start).length > 1 && e.includes('S')) {
                let o = e.slice(0, this._start - 1)
                return o.includes('{') ? t + h : o + t + h
              } else return t + h
            }, '')) ||
          e
        )
      }
      currentLocaleDecimalMarker() {
        return (1.1).toLocaleString().substring(1, 2)
      }
    }
    ;(s.ɵfac = (() => {
      let e
      return function (i) {
        return (e || (e = rt(s)))(i || s)
      }
    })()),
      (s.ɵprov = J({ token: s, factory: s.ɵfac }))
    let a = s
    return a
  })()
function Es() {
  let a = g(In),
    s = g(Dn)
  return s instanceof Function ? N(N({}, a), s()) : N(N({}, a), s)
}
function En(a) {
  return [
    { provide: Dn, useValue: a },
    { provide: In, useValue: Ms },
    { provide: Yt, useFactory: Es },
    vi,
  ]
}
var Pn = (() => {
  let s = class s {
    constructor() {
      ;(this.maskExpression = ''),
        (this.specialCharacters = []),
        (this.patterns = {}),
        (this.prefix = ''),
        (this.suffix = ''),
        (this.thousandSeparator = ' '),
        (this.decimalMarker = '.'),
        (this.dropSpecialCharacters = null),
        (this.hiddenInput = null),
        (this.showMaskTyped = null),
        (this.placeHolderCharacter = null),
        (this.shownMaskExpression = null),
        (this.showTemplate = null),
        (this.clearIfNotMatch = null),
        (this.validation = null),
        (this.separatorLimit = null),
        (this.allowNegativeNumbers = null),
        (this.leadZeroDateTime = null),
        (this.leadZero = null),
        (this.triggerOnMaskChange = null),
        (this.apm = null),
        (this.inputTransformFn = null),
        (this.outputTransformFn = null),
        (this.keepCharacterPositions = null),
        (this.maskFilled = new X()),
        (this._maskValue = ''),
        (this._position = null),
        (this._maskExpressionArray = []),
        (this._justPasted = !1),
        (this._isFocused = !1),
        (this._isComposing = !1),
        (this.document = g(se)),
        (this._maskService = g(vi, { self: !0 })),
        (this._config = g(Yt)),
        (this.onChange = (e) => {}),
        (this.onTouch = () => {})
    }
    ngOnChanges(e) {
      let {
        maskExpression: t,
        specialCharacters: i,
        patterns: n,
        prefix: r,
        suffix: h,
        thousandSeparator: o,
        decimalMarker: c,
        dropSpecialCharacters: u,
        hiddenInput: S,
        showMaskTyped: y,
        placeHolderCharacter: C,
        shownMaskExpression: D,
        showTemplate: z,
        clearIfNotMatch: ue,
        validation: pe,
        separatorLimit: Le,
        allowNegativeNumbers: ye,
        leadZeroDateTime: b,
        leadZero: p,
        triggerOnMaskChange: V,
        apm: P,
        inputTransformFn: K,
        outputTransformFn: Y,
        keepCharacterPositions: Se,
      } = e
      if (
        (t &&
          (t.currentValue !== t.previousValue &&
            !t.firstChange &&
            (this._maskService.maskChanged = !0),
          t.currentValue && t.currentValue.split('||').length > 1
            ? ((this._maskExpressionArray = t.currentValue
                .split('||')
                .sort((O, U) => O.length - U.length)),
              this._setMask())
            : ((this._maskExpressionArray = []),
              (this._maskValue = t.currentValue || ''),
              (this._maskService.maskExpression = this._maskValue))),
        i)
      ) {
        if (!i.currentValue || !Array.isArray(i.currentValue)) return
        this._maskService.specialCharacters = i.currentValue || []
      }
      ye &&
        ((this._maskService.allowNegativeNumbers = ye.currentValue),
        this._maskService.allowNegativeNumbers &&
          (this._maskService.specialCharacters = this._maskService.specialCharacters.filter(
            (O) => O !== '-',
          ))),
        n && n.currentValue && (this._maskService.patterns = n.currentValue),
        P && P.currentValue && (this._maskService.apm = P.currentValue),
        r && (this._maskService.prefix = r.currentValue),
        h && (this._maskService.suffix = h.currentValue),
        o && (this._maskService.thousandSeparator = o.currentValue),
        c && (this._maskService.decimalMarker = c.currentValue),
        u && (this._maskService.dropSpecialCharacters = u.currentValue),
        S && (this._maskService.hiddenInput = S.currentValue),
        y &&
          ((this._maskService.showMaskTyped = y.currentValue),
          y.previousValue === !1 &&
            y.currentValue === !0 &&
            this._isFocused &&
            requestAnimationFrame(() => {
              this._maskService._elementRef?.nativeElement.click()
            })),
        C && (this._maskService.placeHolderCharacter = C.currentValue),
        D && (this._maskService.shownMaskExpression = D.currentValue),
        z && (this._maskService.showTemplate = z.currentValue),
        ue && (this._maskService.clearIfNotMatch = ue.currentValue),
        pe && (this._maskService.validation = pe.currentValue),
        Le && (this._maskService.separatorLimit = Le.currentValue),
        b && (this._maskService.leadZeroDateTime = b.currentValue),
        p && (this._maskService.leadZero = p.currentValue),
        V && (this._maskService.triggerOnMaskChange = V.currentValue),
        K && (this._maskService.inputTransformFn = K.currentValue),
        Y && (this._maskService.outputTransformFn = Y.currentValue),
        Se && (this._maskService.keepCharacterPositions = Se.currentValue),
        this._applyMask()
    }
    validate({ value: e }) {
      if (!this._maskService.validation || !this._maskValue) return null
      if (this._maskService.ipError) return this._createValidationError(e)
      if (this._maskService.cpfCnpjError) return this._createValidationError(e)
      if (
        this._maskValue.startsWith('separator') ||
        Ds.includes(this._maskValue) ||
        this._maskService.clearIfNotMatch
      )
        return null
      if (ws.includes(this._maskValue)) return this._validateTime(e)
      if (e && e.toString().length >= 1) {
        let t = 0
        if (this._maskValue.startsWith('percent')) return null
        for (let i in this._maskService.patterns)
          if (this._maskService.patterns[i]?.optional) {
            if (this._maskValue.indexOf(i) !== this._maskValue.lastIndexOf(i)) {
              let n = this._maskValue
                .split('')
                .filter((r) => r === i)
                .join('')
              t += n.length
            } else this._maskValue.indexOf(i) !== -1 && t++
            if (
              (this._maskValue.indexOf(i) !== -1 &&
                e.toString().length >= this._maskValue.indexOf(i)) ||
              t === this._maskValue.length
            )
              return null
          }
        if (
          this._maskValue.indexOf('{') === 1 &&
          e.toString().length ===
            this._maskValue.length + Number((this._maskValue.split('{')[1] ?? '').split('}')[0]) - 4
        )
          return null
        if (
          (this._maskValue.indexOf('*') > 1 &&
            e.toString().length < this._maskValue.indexOf('*')) ||
          (this._maskValue.indexOf('?') > 1 &&
            e.toString().length < this._maskValue.indexOf('?')) ||
          this._maskValue.indexOf('{') === 1
        )
          return this._createValidationError(e)
        if (this._maskValue.indexOf('*') === -1 || this._maskValue.indexOf('?') === -1) {
          e = typeof e == 'number' ? String(e) : e
          let i = this._maskValue.split('*'),
            n = this._maskService.dropSpecialCharacters
              ? this._maskValue.length -
                this._maskService.checkDropSpecialCharAmount(this._maskValue) -
                t
              : this.prefix
              ? this._maskValue.length + this.prefix.length - t
              : this._maskValue.length - t
          if (i.length === 1 && e.toString().length < n) return this._createValidationError(e)
          if (i.length > 1) {
            let r = i[i.length - 1]
            if (
              r &&
              this._maskService.specialCharacters.includes(r[0]) &&
              String(e).includes(r[0] ?? '') &&
              !this.dropSpecialCharacters
            ) {
              let h = e.split(r[0])
              return h[h.length - 1].length === r.length - 1 ? null : this._createValidationError(e)
            } else
              return ((r && !this._maskService.specialCharacters.includes(r[0])) ||
                !r ||
                this._maskService.dropSpecialCharacters) &&
                e.length >= n - 1
                ? null
                : this._createValidationError(e)
          }
        }
        if (this._maskValue.indexOf('*') === 1 || this._maskValue.indexOf('?') === 1) return null
      }
      return e && this.maskFilled.emit(), null
    }
    onPaste() {
      this._justPasted = !0
    }
    onFocus() {
      this._isFocused = !0
    }
    onModelChange(e) {
      ;(e === '' || e === null || e === void 0) &&
        this._maskService.actualValue &&
        (this._maskService.actualValue = this._maskService.getActualValue(''))
    }
    onInput(e) {
      if (this._isComposing) return
      let t = e.target,
        i = this._maskService.inputTransformFn(t.value)
      if (t.type !== 'number')
        if (typeof i == 'string' || typeof i == 'number') {
          if (
            ((t.value = i.toString()),
            (this._inputValue = t.value),
            this._setMask(),
            !this._maskValue)
          ) {
            this.onChange(t.value)
            return
          }
          let n =
            t.selectionStart === 1
              ? t.selectionStart + this._maskService.prefix.length
              : t.selectionStart
          if (
            this.showMaskTyped &&
            this.keepCharacterPositions &&
            this._maskService.placeHolderCharacter.length === 1
          ) {
            let c = t.value.slice(n - 1, n),
              u = this.prefix.length,
              S = this._maskService._checkSymbolMask(
                c,
                this._maskService.maskExpression[n - 1 - u] ?? '',
              ),
              y = this._maskService._checkSymbolMask(
                c,
                this._maskService.maskExpression[n + 1 - u] ?? '',
              ),
              C = this._maskService.selStart === this._maskService.selEnd,
              D = Number(this._maskService.selStart) - u,
              z = Number(this._maskService.selEnd) - u
            if (this._code === 'Backspace') {
              if (!C)
                this._maskService.selStart === u
                  ? (this._maskService.actualValue =
                      this.prefix +
                      this._maskService.maskIsShown.slice(0, z) +
                      this._inputValue.split(this.prefix).join(''))
                  : this._maskService.selStart === this._maskService.maskIsShown.length + u
                  ? (this._maskService.actualValue =
                      this._inputValue + this._maskService.maskIsShown.slice(D, z))
                  : (this._maskService.actualValue =
                      this.prefix +
                      this._inputValue.split(this.prefix).join('').slice(0, D) +
                      this._maskService.maskIsShown.slice(D, z) +
                      this._maskService.actualValue.slice(
                        z + u,
                        this._maskService.maskIsShown.length + u,
                      ) +
                      this.suffix)
              else if (
                !this._maskService.specialCharacters.includes(
                  this._maskService.maskExpression.slice(
                    n - this.prefix.length,
                    n + 1 - this.prefix.length,
                  ),
                ) &&
                C
              )
                if (D === 1 && this.prefix)
                  (this._maskService.actualValue =
                    this.prefix +
                    this._maskService.placeHolderCharacter +
                    t.value.split(this.prefix).join('').split(this.suffix).join('') +
                    this.suffix),
                    (n = n - 1)
                else {
                  let ue = t.value.substring(0, n),
                    pe = t.value.substring(n)
                  this._maskService.actualValue = ue + this._maskService.placeHolderCharacter + pe
                }
            }
            this._code !== 'Backspace' &&
              (!S && !y && C
                ? (n = Number(t.selectionStart) - 1)
                : this._maskService.specialCharacters.includes(t.value.slice(n, n + 1)) &&
                  y &&
                  !this._maskService.specialCharacters.includes(t.value.slice(n + 1, n + 2))
                ? ((this._maskService.actualValue =
                    t.value.slice(0, n - 1) + t.value.slice(n, n + 1) + c + t.value.slice(n + 2)),
                  (n = n + 1))
                : S
                ? t.value.length === 1 && n === 1
                  ? (this._maskService.actualValue =
                      this.prefix +
                      c +
                      this._maskService.maskIsShown.slice(1, this._maskService.maskIsShown.length) +
                      this.suffix)
                  : (this._maskService.actualValue =
                      t.value.slice(0, n - 1) +
                      c +
                      t.value
                        .slice(n + 1)
                        .split(this.suffix)
                        .join('') +
                      this.suffix)
                : this.prefix &&
                  t.value.length === 1 &&
                  n - u === 1 &&
                  this._maskService._checkSymbolMask(
                    t.value,
                    this._maskService.maskExpression[n - 1 - u] ?? '',
                  ) &&
                  (this._maskService.actualValue =
                    this.prefix +
                    t.value +
                    this._maskService.maskIsShown.slice(1, this._maskService.maskIsShown.length) +
                    this.suffix))
          }
          let r = 0,
            h = !1
          if (
            (this._code === 'Delete' && (this._maskService.deletedSpecialCharacter = !0),
            this._inputValue.length >= this._maskService.maskExpression.length - 1 &&
              this._code !== 'Backspace' &&
              this._maskService.maskExpression === 'd0/M0/0000' &&
              n < 10)
          ) {
            let c = this._inputValue.slice(n - 1, n)
            t.value = this._inputValue.slice(0, n - 1) + c + this._inputValue.slice(n + 1)
          }
          if (
            (this._maskService.maskExpression === 'd0/M0/0000' &&
              this.leadZeroDateTime &&
              ((n < 3 && Number(t.value) > 31 && Number(t.value) < 40) ||
                (n === 5 && Number(t.value.slice(3, 5)) > 12)) &&
              (n = n + 2),
            this._maskService.maskExpression === 'Hh:m0:s0' &&
              this.apm &&
              (this._justPasted &&
                t.value.slice(0, 2) === '00' &&
                (t.value = t.value.slice(1, 2) + t.value.slice(2, t.value.length)),
              (t.value = t.value === '00' ? '0' : t.value)),
            this._maskService.applyValueChanges(
              n,
              this._justPasted,
              this._code === 'Backspace' || this._code === 'Delete',
              (c, u) => {
                ;(this._justPasted = !1), (r = c), (h = u)
              },
            ),
            this._getActiveElement() !== t)
          )
            return
          this._maskService.plusOnePosition &&
            ((n = n + 1), (this._maskService.plusOnePosition = !1)),
            this._maskExpressionArray.length &&
              (this._code === 'Backspace'
                ? (n = this.specialCharacters.includes(this._inputValue.slice(n - 1, n))
                    ? n - 1
                    : n)
                : (n =
                    t.selectionStart === 1
                      ? t.selectionStart + this._maskService.prefix.length
                      : t.selectionStart)),
            (this._position =
              this._position === 1 && this._inputValue.length === 1 ? null : this._position)
          let o = this._position
            ? this._inputValue.length + n + r
            : n + (this._code === 'Backspace' && !h ? 0 : r)
          o > this._getActualInputLength() &&
            (o =
              t.value === this._maskService.decimalMarker && t.value.length === 1
                ? this._getActualInputLength() + 1
                : this._getActualInputLength()),
            o < 0 && (o = 0),
            t.setSelectionRange(o, o),
            (this._position = null)
        } else
          console.warn(
            'Ngx-mask writeValue work with string | number, your current value:',
            typeof i,
          )
      else {
        if (!this._maskValue) {
          this.onChange(t.value)
          return
        }
        this._maskService.applyValueChanges(
          t.value.length,
          this._justPasted,
          this._code === 'Backspace' || this._code === 'Delete',
        )
      }
    }
    onCompositionStart() {
      this._isComposing = !0
    }
    onCompositionEnd(e) {
      ;(this._isComposing = !1), (this._justPasted = !0), this.onInput(e)
    }
    onBlur(e) {
      if (this._maskValue) {
        let t = e.target
        if (this.leadZero && t.value.length > 0 && typeof this.decimalMarker == 'string') {
          let i = this._maskService.maskExpression,
            n = Number(this._maskService.maskExpression.slice(i.length - 1, i.length))
          if (n > 1) {
            t.value = this.suffix ? t.value.split(this.suffix).join('') : t.value
            let r = t.value.split(this.decimalMarker)[1]
            ;(t.value = t.value.includes(this.decimalMarker)
              ? t.value + '0'.repeat(n - r.length) + this.suffix
              : t.value + this.decimalMarker + '0'.repeat(n) + this.suffix),
              (this._maskService.actualValue = t.value)
          }
        }
        this._maskService.clearIfNotMatchFn()
      }
      ;(this._isFocused = !1), this.onTouch()
    }
    onClick(e) {
      if (!this._maskValue) return
      let t = e.target,
        i = 0,
        n = 0
      t !== null &&
        t.selectionStart !== null &&
        t.selectionStart === t.selectionEnd &&
        t.selectionStart > this._maskService.prefix.length &&
        e.keyCode !== 38 &&
        this._maskService.showMaskTyped &&
        !this.keepCharacterPositions &&
        ((this._maskService.maskIsShown = this._maskService.showMaskInInput()),
        t.setSelectionRange && this._maskService.prefix + this._maskService.maskIsShown === t.value
          ? (t.focus(), t.setSelectionRange(i, n))
          : t.selectionStart > this._maskService.actualValue.length &&
            t.setSelectionRange(
              this._maskService.actualValue.length,
              this._maskService.actualValue.length,
            ))
      let r =
        t &&
        (t.value === this._maskService.prefix
          ? this._maskService.prefix + this._maskService.maskIsShown
          : t.value)
      if (
        (t && t.value !== r && (t.value = r),
        t &&
          t.type !== 'number' &&
          (t.selectionStart || t.selectionEnd) <= this._maskService.prefix.length)
      ) {
        t.selectionStart = this._maskService.prefix.length
        return
      }
      t &&
        t.selectionEnd > this._getActualInputLength() &&
        (t.selectionEnd = this._getActualInputLength())
    }
    onKeyDown(e) {
      if (!this._maskValue) return
      if (this._isComposing) {
        e.key === 'Enter' && this.onCompositionEnd(e)
        return
      }
      this._code = e.code ? e.code : e.key
      let t = e.target
      if (((this._inputValue = t.value), this._setMask(), t.type !== 'number')) {
        if (
          (e.key === 'ArrowUp' && e.preventDefault(),
          e.key === 'ArrowLeft' || e.key === 'Backspace' || e.key === 'Delete')
        ) {
          if (
            (e.key === 'Backspace' && t.value.length === 0 && (t.selectionStart = t.selectionEnd),
            e.key === 'Backspace' && t.selectionStart !== 0)
          ) {
            if (
              ((this.specialCharacters = this.specialCharacters?.length
                ? this.specialCharacters
                : this._config.specialCharacters),
              this.prefix.length > 1 && t.selectionStart <= this.prefix.length)
            )
              t.setSelectionRange(this.prefix.length, t.selectionEnd)
            else if (this._inputValue.length !== t.selectionStart && t.selectionStart !== 1)
              for (
                ;
                this.specialCharacters.includes(
                  (this._inputValue[t.selectionStart - 1] ?? '').toString(),
                ) &&
                ((this.prefix.length >= 1 && t.selectionStart > this.prefix.length) ||
                  this.prefix.length === 0);

              )
                t.setSelectionRange(t.selectionStart - 1, t.selectionEnd)
          }
          this.checkSelectionOnDeletion(t),
            this._maskService.prefix.length &&
              t.selectionStart <= this._maskService.prefix.length &&
              t.selectionEnd <= this._maskService.prefix.length &&
              e.preventDefault()
          let i = t.selectionStart
          e.key === 'Backspace' &&
            !t.readOnly &&
            i === 0 &&
            t.selectionEnd === t.value.length &&
            t.value.length !== 0 &&
            ((this._position = this._maskService.prefix ? this._maskService.prefix.length : 0),
            this._maskService.applyMask(
              this._maskService.prefix,
              this._maskService.maskExpression,
              this._position,
            ))
        }
        this.suffix &&
        this.suffix.length > 1 &&
        this._inputValue.length - this.suffix.length < t.selectionStart
          ? t.setSelectionRange(
              this._inputValue.length - this.suffix.length,
              this._inputValue.length,
            )
          : ((e.code === 'KeyA' && e.ctrlKey) || (e.code === 'KeyA' && e.metaKey)) &&
            (t.setSelectionRange(0, this._getActualInputLength()), e.preventDefault()),
          (this._maskService.selStart = t.selectionStart),
          (this._maskService.selEnd = t.selectionEnd)
      }
    }
    writeValue(e) {
      return bi(this, null, function* () {
        if (
          (typeof e == 'object' &&
            e !== null &&
            'value' in e &&
            ('disable' in e && this.setDisabledState(!!e.disable), (e = e.value)),
          e !== null && (e = this.inputTransformFn ? this.inputTransformFn(e) : e),
          typeof e == 'string' || typeof e == 'number' || e === null || e === void 0)
        ) {
          ;(e == null || e === '') &&
            ((this._maskService._currentValue = ''), (this._maskService._previousValue = ''))
          let t = e
          if (typeof t == 'number' || this._maskValue.startsWith('separator')) {
            t = String(t)
            let i = this._maskService.currentLocaleDecimalMarker()
            Array.isArray(this._maskService.decimalMarker) ||
              (t =
                this._maskService.decimalMarker !== i
                  ? t.replace(i, this._maskService.decimalMarker)
                  : t),
              this._maskService.leadZero &&
                t &&
                this.maskExpression &&
                this.dropSpecialCharacters !== !1 &&
                (t = this._maskService._checkPrecision(this._maskService.maskExpression, t)),
              this._maskService.decimalMarker === ',' && (t = t.toString().replace('.', ',')),
              this.maskExpression?.startsWith('separator') &&
                this.leadZero &&
                requestAnimationFrame(() => {
                  this._maskService.applyMask(t?.toString() ?? '', this._maskService.maskExpression)
                }),
              (this._maskService.isNumberValue = !0)
          }
          typeof t != 'string' && (t = ''),
            (this._inputValue = t),
            this._setMask(),
            (t && this._maskService.maskExpression) ||
            (this._maskService.maskExpression &&
              (this._maskService.prefix || this._maskService.showMaskTyped))
              ? (typeof this.inputTransformFn != 'function' &&
                  (this._maskService.writingValue = !0),
                (this._maskService.formElementProperty = [
                  'value',
                  this._maskService.applyMask(t, this._maskService.maskExpression),
                ]),
                typeof this.inputTransformFn != 'function' && (this._maskService.writingValue = !1))
              : (this._maskService.formElementProperty = ['value', t]),
            (this._inputValue = t)
        } else console.warn('Ngx-mask writeValue work with string | number, your current value:', typeof e)
      })
    }
    registerOnChange(e) {
      this._maskService.onChange = this.onChange = e
    }
    registerOnTouched(e) {
      this.onTouch = e
    }
    _getActiveElement(e = this.document) {
      let t = e?.activeElement?.shadowRoot
      return t?.activeElement ? this._getActiveElement(t) : e.activeElement
    }
    checkSelectionOnDeletion(e) {
      ;(e.selectionStart = Math.min(
        Math.max(this.prefix.length, e.selectionStart),
        this._inputValue.length - this.suffix.length,
      )),
        (e.selectionEnd = Math.min(
          Math.max(this.prefix.length, e.selectionEnd),
          this._inputValue.length - this.suffix.length,
        ))
    }
    setDisabledState(e) {
      this._maskService.formElementProperty = ['disabled', e]
    }
    _applyMask() {
      ;(this._maskService.maskExpression = this._maskService._repeatPatternSymbols(
        this._maskValue || '',
      )),
        (this._maskService.formElementProperty = [
          'value',
          this._maskService.applyMask(this._inputValue, this._maskService.maskExpression),
        ])
    }
    _validateTime(e) {
      let t = this._maskValue.split('').filter((i) => i !== ':').length
      return e && ((+(e[e.length - 1] ?? -1) == 0 && e.length < t) || e.length <= t - 2)
        ? this._createValidationError(e)
        : null
    }
    _getActualInputLength() {
      return (
        this._maskService.actualValue.length ||
        this._maskService.actualValue.length + this._maskService.prefix.length
      )
    }
    _createValidationError(e) {
      return { mask: { requiredMask: this._maskValue, actualValue: e } }
    }
    _setMask() {
      this._maskExpressionArray.some((e) => {
        if (
          (e.split('').some((i) => this._maskService.specialCharacters.includes(i)) &&
            this._inputValue &&
            !e.includes('S')) ||
          e.includes('{')
        ) {
          let i =
            this._maskService.removeMask(this._inputValue)?.length <=
            this._maskService.removeMask(e)?.length
          if (i)
            return (
              (this._maskValue =
                this.maskExpression =
                this._maskService.maskExpression =
                  e.includes('{') ? this._maskService._repeatPatternSymbols(e) : e),
              i
            )
          {
            let n = this._maskExpressionArray[this._maskExpressionArray.length - 1] ?? ''
            this._maskValue =
              this.maskExpression =
              this._maskService.maskExpression =
                n.includes('{') ? this._maskService._repeatPatternSymbols(n) : n
          }
        } else {
          let i = this._maskService
            .removeMask(this._inputValue)
            ?.split('')
            .every((n, r) => {
              let h = e.charAt(r)
              return this._maskService._checkSymbolMask(n, h)
            })
          if (i)
            return (this._maskValue = this.maskExpression = this._maskService.maskExpression = e), i
        }
      })
    }
  }
  ;(s.ɵfac = function (t) {
    return new (t || s)()
  }),
    (s.ɵdir = oe({
      type: s,
      selectors: [
        ['input', 'mask', ''],
        ['textarea', 'mask', ''],
      ],
      hostBindings: function (t, i) {
        t & 1 &&
          x('paste', function () {
            return i.onPaste()
          })('focus', function (r) {
            return i.onFocus(r)
          })('ngModelChange', function (r) {
            return i.onModelChange(r)
          })('input', function (r) {
            return i.onInput(r)
          })('compositionstart', function (r) {
            return i.onCompositionStart(r)
          })('compositionend', function (r) {
            return i.onCompositionEnd(r)
          })('blur', function (r) {
            return i.onBlur(r)
          })('click', function (r) {
            return i.onClick(r)
          })('keydown', function (r) {
            return i.onKeyDown(r)
          })
      },
      inputs: {
        maskExpression: [A.None, 'mask', 'maskExpression'],
        specialCharacters: 'specialCharacters',
        patterns: 'patterns',
        prefix: 'prefix',
        suffix: 'suffix',
        thousandSeparator: 'thousandSeparator',
        decimalMarker: 'decimalMarker',
        dropSpecialCharacters: 'dropSpecialCharacters',
        hiddenInput: 'hiddenInput',
        showMaskTyped: 'showMaskTyped',
        placeHolderCharacter: 'placeHolderCharacter',
        shownMaskExpression: 'shownMaskExpression',
        showTemplate: 'showTemplate',
        clearIfNotMatch: 'clearIfNotMatch',
        validation: 'validation',
        separatorLimit: 'separatorLimit',
        allowNegativeNumbers: 'allowNegativeNumbers',
        leadZeroDateTime: 'leadZeroDateTime',
        leadZero: 'leadZero',
        triggerOnMaskChange: 'triggerOnMaskChange',
        apm: 'apm',
        inputTransformFn: 'inputTransformFn',
        outputTransformFn: 'outputTransformFn',
        keepCharacterPositions: 'keepCharacterPositions',
      },
      outputs: { maskFilled: 'maskFilled' },
      exportAs: ['mask', 'ngxMask'],
      standalone: !0,
      features: [
        Ie([
          { provide: zi, useExisting: s, multi: !0 },
          { provide: Zi, useExisting: s, multi: !0 },
          vi,
        ]),
        ii,
      ],
    }))
  let a = s
  return a
})()
function Ut(a) {
  return a ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(a) : ''
}
function Ps(a, s) {
  if ((a & 1 && (m(0, 'mat-option', 18), f(1), d()), a & 2)) {
    let l = s.$implicit
    w('value', l), v(), We(l)
  }
}
function Ts(a, s) {
  if ((a & 1 && (m(0, 'li'), R(1, 'img', 22), d()), a & 2)) {
    let l = s.$implicit
    v(), w('src', l, ot)
  }
}
function Os(a, s) {
  if (
    (a & 1 &&
      (m(0, 'div', 4)(1, 'div', 19)(2, 'h3', 20),
      f(3, 'Fotos'),
      d(),
      m(4, 'ul', 21),
      Ge(5, Ts, 2, 1, 'li', null, Ze),
      d()()()),
    a & 2)
  ) {
    let l = k()
    v(5), qe(l.data.product == null ? null : l.data.product.images)
  }
}
var As = (a) => ({ 'form-loading': a }),
  Tn = (() => {
    let s = class s {
      constructor(e) {
        ;(this.data = e),
          (this.isLoading = Z(!1)),
          (this.allCategories = Z([])),
          (this.categoryService = g($t)),
          (this.productForm = new Tt({
            title: new W(e?.product?.title ?? '', [q.required]),
            description: new W(e?.product?.description ?? '', [q.required]),
            brand: new W(e?.product?.brand ?? '', [q.required]),
            category: new W(e?.product?.category ?? '', [q.required]),
            price: new W(Ut(e?.product?.price), [q.required]),
            discountPercentage: new W(e?.product?.discountPercentage ?? '', [q.required]),
            rating: new W(e?.product?.rating ?? '', [q.required]),
            stock: new W(e?.product?.stock ?? '', [q.required]),
          }))
      }
      ngOnInit() {
        this.getCategories()
      }
      getCategories() {
        this.categoryService.categories().subscribe({
          next: (e) => {
            this.allCategories.set(e)
          },
        })
      }
      onSubmit() {
        this.productForm.valid &&
          (this.isLoading.set(!0),
          console.log(this.productForm.value),
          setTimeout(() => {
            this.isLoading.set(!1)
          }, 1e3))
      }
    }
    ;(s.ɵfac = function (t) {
      return new (t || s)(_(fi))
    }),
      (s.ɵcmp = H({
        type: s,
        selectors: [['app-modal']],
        standalone: !0,
        features: [Ie([En()]), B],
        decls: 52,
        vars: 9,
        consts: [
          ['mat-dialog-title', '', 1, 'mat__modal--title'],
          [1, 'mat__dialog--content-product'],
          [3, 'formGroup', 'ngClass', 'ngSubmit'],
          [1, 'grid__container'],
          [1, 'grid__col', 'w-full'],
          [1, 'w-full'],
          [
            'matInput',
            '',
            'placeholder',
            'Nome do produto',
            'name',
            'title',
            'formControlName',
            'title',
          ],
          [
            'matInput',
            '',
            'placeholder',
            'Descri\xE7\xE3o do produto',
            'name',
            'description',
            'formControlName',
            'description',
          ],
          [1, 'grid__col'],
          [
            'matInput',
            '',
            'placeholder',
            'Nome da marca',
            'name',
            'brand',
            'formControlName',
            'brand',
          ],
          ['name', 'category', 'formControlName', 'category'],
          [
            'matInput',
            '',
            'placeholder',
            'Valor do produto',
            'name',
            'price',
            'formControlName',
            'price',
            'mask',
            'separator.2',
            'prefix',
            'R$ ',
            3,
            'thousandSeparator',
            'decimalMarker',
            'dropSpecialCharacters',
          ],
          [
            'matInput',
            '',
            'placeholder',
            'Discount aplicado',
            'name',
            'discountPercentage',
            'formControlName',
            'discountPercentage',
            'mask',
            'percentage',
            'suffix',
            '%',
          ],
          [
            'matInput',
            '',
            'placeholder',
            'Avaia\xE7\xE3o do produto',
            'name',
            'rating',
            'formControlName',
            'rating',
          ],
          [
            'matInput',
            '',
            'type',
            'number',
            'placeholder',
            'Quantidade em estoque',
            'name',
            'stock',
            'formControlName',
            'stock',
          ],
          ['class', 'grid__col w-full'],
          [1, 'mat__button--send'],
          ['mat-flat-button', '', 'color', 'primary', 'type', 'submit', 1, 'w-full'],
          [3, 'value'],
          [1, 'wrap'],
          [1, 'mat__modal--subtitle'],
          [1, 'list__thumbnail'],
          ['alt', '', 1, 'thumbnail__image', 3, 'src'],
        ],
        template: function (t, i) {
          t & 1 &&
            (m(0, 'h2', 0),
            f(1),
            d(),
            m(2, 'mat-dialog-content', 1)(3, 'form', 2),
            x('ngSubmit', function () {
              return i.onSubmit()
            }),
            m(4, 'div', 3)(5, 'div', 4)(6, 'mat-form-field', 5)(7, 'mat-label'),
            f(8, 'T\xEDtulo'),
            d(),
            R(9, 'input', 6),
            d()(),
            m(10, 'div', 4)(11, 'mat-form-field', 5)(12, 'mat-label'),
            f(13, 'Descri\xE7\xE3o'),
            d(),
            R(14, 'textarea', 7),
            d()(),
            m(15, 'div', 8)(16, 'mat-form-field', 5)(17, 'mat-label'),
            f(18, 'Marca'),
            d(),
            R(19, 'input', 9),
            d()(),
            m(20, 'div', 8)(21, 'mat-form-field', 5)(22, 'mat-label'),
            f(23, 'Categoria'),
            d(),
            m(24, 'mat-select', 10),
            Ge(25, Ps, 2, 2, 'mat-option', 18, Ze),
            d()()(),
            m(27, 'div', 8)(28, 'mat-form-field', 5)(29, 'mat-label'),
            f(30, 'Pre\xE7o'),
            d(),
            R(31, 'input', 11),
            d()(),
            m(32, 'div', 8)(33, 'mat-form-field', 5)(34, 'mat-label'),
            f(35, 'Discount'),
            d(),
            R(36, 'input', 12),
            d()(),
            m(37, 'div', 8)(38, 'mat-form-field', 5)(39, 'mat-label'),
            f(40, 'Avalia\xE7\xF5es'),
            d(),
            R(41, 'input', 13),
            d()(),
            m(42, 'div', 8)(43, 'mat-form-field', 5)(44, 'mat-label'),
            f(45, 'Estoque'),
            d(),
            R(46, 'input', 14),
            d()(),
            M(47, Os, 7, 0, 'div', 15),
            m(48, 'div', 4)(49, 'div', 16)(50, 'button', 17),
            f(51, 'Salvar'),
            d()()()()()()),
            t & 2 &&
              (v(),
              We(i.data.title),
              v(2),
              w('formGroup', i.productForm)('ngClass', dt(7, As, i.isLoading())),
              v(22),
              qe(i.allCategories()),
              v(6),
              w('thousandSeparator', '.')('decimalMarker', ',')('dropSpecialCharacters', !0),
              v(16),
              te(47, i.data.product != null && i.data.product.images ? 47 : -1))
        },
        dependencies: [
          Pn,
          Wt,
          Gt,
          qt,
          Nt,
          Ot,
          Vi,
          Gi,
          Et,
          Pt,
          At,
          Ft,
          me,
          de,
          Rt,
          It,
          Dt,
          wt,
          Ui,
          Yi,
          jt,
          Lt,
          Ct,
          Te,
          bt,
        ],
        styles: [
          '[_nghost-%COMP%]{display:flex;width:800px;height:100vh;min-width:100px;box-sizing:border-box;flex-direction:column;align-items:center;justify-content:flex-start;position:fixed;top:0;right:0;background-color:#fff}@media (max-width: 900px){[_nghost-%COMP%]{width:calc(100% - 30px)}}.mat__modal--title[_ngcontent-%COMP%]{font-size:18px;font-weight:500}.mat__modal--subtitle[_ngcontent-%COMP%]{font-size:14px;font-weight:500;margin:0 0 10px}.mat__dialog--content-product[_ngcontent-%COMP%]{width:100%;max-height:calc(100vh - 56px);position:relative}.mat__dialog--content-product[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:100%}.mat__dialog--content-product[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .grid__container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}@media (max-width: 768px){.mat__dialog--content-product[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .grid__container[_ngcontent-%COMP%]{grid-template-columns:1fr}}.mat__dialog--content-product[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .grid__container[_ngcontent-%COMP%]   .grid__col.w-full[_ngcontent-%COMP%]{grid-column:1/3}@media (max-width: 768px){.mat__dialog--content-product[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .grid__container[_ngcontent-%COMP%]   .grid__col.w-full[_ngcontent-%COMP%]{grid-column:1}}.mat__dialog--content-product[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .mat__button--send[_ngcontent-%COMP%]{margin-top:30px;display:flex;justify-content:center}.mat__dialog--content-product[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .mat__button--send[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{max-width:260px}.mat__dialog--content-product[_ngcontent-%COMP%]   .list__thumbnail[_ngcontent-%COMP%]{width:100%;display:flex;flex-wrap:wrap;justify-content:flex-start;gap:10px}.mat__dialog--content-product[_ngcontent-%COMP%]   .list__thumbnail[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:2px;border:2px solid #333}.mat__dialog--content-product[_ngcontent-%COMP%]   .list__thumbnail[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .thumbnail__image[_ngcontent-%COMP%]{width:150px;height:150px;object-fit:cover;object-position:center;margin:0}',
        ],
      }))
    let a = s
    return a
  })()
var On = (() => {
  let s = class s {
    constructor() {
      this.http = g(Ti)
    }
    products(e) {
      let { limit: t = 15, skip: i = 0 } = e
      return this.http.get(`products?limit=${t}&skip=${i}`)
    }
    productsBySearch(e) {
      let { limit: t, skip: i, category: n } = e
      return this.http.get(`products/category/${n}?limit=${t}&skip=${i}`)
    }
    productsByCategory(e) {
      let { limit: t, skip: i, category: n } = e
      return this.http.get(`products/category/${n}?limit=${t}&skip=${i}`)
    }
    searchByProducts(e) {
      let { limit: t, skip: i, search: n } = e
      return this.http.get(`products/search?q=${n}&limit=${t}&skip=${i}`)
    }
  }
  ;(s.ɵfac = function (t) {
    return new (t || s)()
  }),
    (s.ɵprov = J({ token: s, factory: s.ɵfac, providedIn: 'root' }))
  let a = s
  return a
})()
function Fs(a, s) {
  a & 1 && (m(0, 'th', 23), f(1, '\xCDndice.'), d())
}
function Rs(a, s) {
  if (a & 1) {
    let l = L()
    m(0, 'td', 24),
      x('click', function () {
        let i = I(l).$implicit,
          n = k(2)
        return E(n.onDetails(i))
      }),
      f(1),
      d()
  }
  if (a & 2) {
    let l = s.index,
      e = k(2)
    v(), ve(' ', e.skip() + l + 1, ' ')
  }
}
function Ns(a, s) {
  a & 1 && (m(0, 'th', 23), f(1, 'Foto'), d())
}
function Ls(a, s) {
  if (a & 1) {
    let l = L()
    m(0, 'td', 24),
      x('click', function () {
        let i = I(l).$implicit,
          n = k(2)
        return E(n.onDetails(i))
      }),
      R(1, 'img', 25),
      d()
  }
  if (a & 2) {
    let l = s.$implicit
    v(), w('src', l.thumbnail, ot)('alt', l.title)
  }
}
function js(a, s) {
  a & 1 && (m(0, 'th', 23), f(1, 'T\xEDtulo'), d())
}
function Hs(a, s) {
  if (a & 1) {
    let l = L()
    m(0, 'td', 24),
      x('click', function () {
        let i = I(l).$implicit,
          n = k(2)
        return E(n.onDetails(i))
      }),
      f(1),
      d()
  }
  if (a & 2) {
    let l = s.$implicit
    v(), ve(' ', l.title, ' ')
  }
}
function Bs(a, s) {
  a & 1 && (m(0, 'th', 23), f(1, 'Estoque'), d())
}
var $s = (a, s, l) => ({ low__stock: a, critical__stock: s, positive__stock: l })
function zs(a, s) {
  if (a & 1) {
    let l = L()
    m(0, 'td', 24),
      x('click', function () {
        let i = I(l).$implicit,
          n = k(2)
        return E(n.onDetails(i))
      }),
      m(1, 'strong', 26),
      f(2),
      d()()
  }
  if (a & 2) {
    let l = s.$implicit
    v(),
      w('ngClass', wi(2, $s, l.stock < 60, l.stock < 50, l.stock > 110)),
      v(),
      ve(' ', l.stock, ' ')
  }
}
function Vs(a, s) {
  a & 1 && (m(0, 'th', 23), f(1, 'Marca'), d())
}
function Zs(a, s) {
  if (a & 1) {
    let l = L()
    m(0, 'td', 24),
      x('click', function () {
        let i = I(l).$implicit,
          n = k(2)
        return E(n.onDetails(i))
      }),
      f(1),
      d()
  }
  if (a & 2) {
    let l = s.$implicit
    v(), ve(' ', l.brand, ' ')
  }
}
function Gs(a, s) {
  a & 1 && (m(0, 'th', 23), f(1, 'Categoria'), d())
}
function qs(a, s) {
  if (a & 1) {
    let l = L()
    m(0, 'td', 24),
      x('click', function () {
        let i = I(l).$implicit,
          n = k(2)
        return E(n.onDetails(i))
      }),
      f(1),
      d()
  }
  if (a & 2) {
    let l = s.$implicit
    v(), ve(' ', l.category, ' ')
  }
}
function Ws(a, s) {
  a & 1 && (m(0, 'th', 23), f(1, 'Pre\xE7o'), d())
}
function Ys(a, s) {
  if (a & 1) {
    let l = L()
    m(0, 'td', 24),
      x('click', function () {
        let i = I(l).$implicit,
          n = k(2)
        return E(n.onDetails(i))
      }),
      f(1),
      d()
  }
  if (a & 2) {
    let l = s.$implicit,
      e = k(2)
    v(), ve(' ', e.formatter(l.price), ' ')
  }
}
function Us(a, s) {
  a & 1 && R(0, 'tr', 27)
}
function Qs(a, s) {
  a & 1 && R(0, 'tr', 28)
}
function Ks(a, s) {
  if (a & 1) {
    let l = L()
    m(0, 'footer', 29)(1, 'mat-paginator', 7),
      x('page', function (t) {
        I(l)
        let i = k(2)
        return E(i.handlePageEvent(t))
      }),
      d()()
  }
  if (a & 2) {
    let l = k(2)
    v(),
      w('pageSizeOptions', l.pageSizeOptions)('length', l.pageLength())('pageSize', l.pageSize())(
        'pageIndex',
        l.pageIndex(),
      )
  }
}
function Xs(a, s) {
  if (a & 1) {
    let l = L()
    m(0, 'header', 1)(1, 'div', 2)(2, 'h1', 3),
      f(3, 'Produtos'),
      d(),
      m(4, 'button', 4)(5, 'mat-icon'),
      f(6, 'more_vert'),
      d()(),
      m(7, 'mat-menu', null, 5)(9, 'button', 6),
      x('click', function () {
        I(l)
        let t = k()
        return E(t.onDetails())
      }),
      f(10, 'Adicionar novo produto'),
      d()()(),
      m(11, 'mat-paginator', 7),
      x('page', function (t) {
        I(l)
        let i = k()
        return E(i.handlePageEvent(t))
      }),
      d()(),
      m(12, 'div', 8)(13, 'table', 9, 10),
      ce(15, 11),
      M(16, Fs, 2, 0, 'th', 12)(17, Rs, 2, 1, 'td', 13),
      he(),
      ce(18, 14),
      M(19, Ns, 2, 0, 'th', 12)(20, Ls, 2, 2, 'td', 13),
      he(),
      ce(21, 15),
      M(22, js, 2, 0, 'th', 12)(23, Hs, 2, 1, 'td', 13),
      he(),
      ce(24, 16),
      M(25, Bs, 2, 0, 'th', 12)(26, zs, 3, 6, 'td', 13),
      he(),
      ce(27, 17),
      M(28, Vs, 2, 0, 'th', 12)(29, Zs, 2, 1, 'td', 13),
      he(),
      ce(30, 18),
      M(31, Gs, 2, 0, 'th', 12)(32, qs, 2, 1, 'td', 13),
      he(),
      ce(33, 19),
      M(34, Ws, 2, 0, 'th', 12)(35, Ys, 2, 1, 'td', 13),
      he(),
      M(36, Us, 1, 0, 'tr', 20)(37, Qs, 1, 0, 'tr', 21),
      d()(),
      M(38, Ks, 2, 4, 'footer', 22)
  }
  if (a & 2) {
    let l = Mi(8),
      e = k()
    v(4),
      w('matMenuTriggerFor', l),
      v(7),
      w('pageSizeOptions', e.pageSizeOptions)('length', e.pageLength())('pageSize', e.pageSize())(
        'pageIndex',
        e.pageIndex(),
      ),
      v(2),
      w('dataSource', e.dataSource),
      v(23),
      w('matHeaderRowDef', e.displayedColumns),
      v(),
      w('matRowDefColumns', e.displayedColumns),
      v(),
      te(38, e.limit() !== 5 ? 38 : -1)
  }
}
var Ro = (() => {
  let s = class s {
    constructor() {
      ;(this.filterAdminService = g(Bt)),
        (this.authService = g(Wi)),
        (this.productService = g(On)),
        (this.dialogModal = g(Ne)),
        (this.activatedRoute = g(mt)),
        (this.router = g(ut)),
        (this.displayedColumns = [
          'pos',
          'thumbnail',
          'title',
          'stock',
          'brand',
          'category',
          'price',
        ]),
        (this.dataSource = new hi([])),
        (this.pageSizeOptions = [5, 15, 25]),
        (this.pageLength = Z(0)),
        (this.pageIndex = Z(0)),
        (this.pageSize = Z(15)),
        (this.limit = Z(15)),
        (this.skip = Z(0)),
        (this.products$ = this.activatedRoute.queryParamMap.pipe(
          Be((e) => {
            let t = e.get('search') ?? '',
              i = e.get('category') ?? '',
              n = e.get('limit') ?? 15,
              r = e.get('skip') ?? 0
            if (t || i) {
              ;(n = 15), (r = 0)
              let h = { limit: n, skip: r }
              this.router.navigate([], {
                relativeTo: this.activatedRoute,
                queryParams: h,
                queryParamsHandling: 'merge',
              })
            }
            return { limit: n, skip: r, search: t, category: i }
          }),
          $e((e) =>
            e.search
              ? this.productService.searchByProducts(e).pipe(Be((t) => this.getProducts(t)))
              : e.category
              ? this.productService.productsByCategory(e).pipe(Be((t) => this.getProducts(t)))
              : this.productService.products(e).pipe(Be((t) => this.getProducts(t))),
          ),
        ))
    }
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator
    }
    ngOnInit() {
      ;(this.filterAdminService.setHasFilter = { search: !0, options: !0 }),
        this.getUser(),
        this.activatedRoute.queryParamMap.subscribe((e) => {
          let t = e.get('limit') ?? 15,
            i = e.get('skip') ?? 0
          t &&
            this.pageSizeOptions.includes(Number(t)) &&
            (this.limit.set(Number(t)), this.pageSize.set(Number(t))),
            i && this.skip.set(Number(i))
        }),
        this.onWachModalFilter()
    }
    getUser() {
      this.authService.me().subscribe()
    }
    getProducts(e) {
      return (
        this.pageLength.set(e.total),
        this.pageIndex.set(e.skip / this.limit()),
        this.skip.set(e.skip),
        (this.dataSource = new hi(e.products)),
        e
      )
    }
    handlePageEvent(e) {
      ;(this.pageEvent = e),
        this.pageLength.set(e.length),
        this.pageSize.set(e.pageSize),
        this.pageIndex.set(e.pageIndex),
        this.limit.set(e.pageSize),
        this.skip.set(e.pageIndex * e.pageSize)
      let t = { limit: e.pageSize, skip: this.skip() }
      this.router.navigate([], {
        relativeTo: this.activatedRoute,
        queryParams: t,
        queryParamsHandling: 'merge',
      })
    }
    onWachModalFilter() {
      this.filterAdminService.getOpenModal.subscribe((e) => {
        e &&
          this.dialogModal
            .open(wn, { position: { top: '80px' } })
            .afterClosed()
            .subscribe(() => {
              this.filterAdminService.setOpenModal = !1
            })
      })
    }
    onDetails(e) {
      this.dialogModal
        .open(Tn, {
          position: { top: '0', right: '0' },
          data: { title: e ? 'Editar Produto' : 'Adicionar Produto', product: e },
        })
        .afterClosed()
        .subscribe((i) => {
          console.log(`Modal Fechado: ${i}`)
        })
    }
    formatter(e) {
      return Ut(e)
    }
    ngOnDestroy() {
      ;(this.filterAdminService.setHasFilter = null),
        this.filterAdminService.searchForm.setValue('')
    }
  }
  ;(s.ɵfac = function (t) {
    return new (t || s)()
  }),
    (s.ɵcmp = H({
      type: s,
      selectors: [['ng-component']],
      viewQuery: function (t, i) {
        if ((t & 1 && De(Ht, 5), t & 2)) {
          let n
          ie((n = ne())) && (i.paginator = n.first)
        }
      },
      standalone: !0,
      features: [B],
      decls: 3,
      vars: 3,
      consts: [
        [1, 'section__page--container'],
        [1, 'section__header'],
        [1, 'section__header--group'],
        [1, 'section__page--title'],
        ['mat-icon-button', '', 'aria-label', 'Abre mais op\xE7\xF5es', 3, 'matMenuTriggerFor'],
        ['menu', 'matMenu'],
        ['mat-menu-item', '', 3, 'click'],
        [
          'showFirstLastButtons',
          '',
          'itemsPerPageLabel',
          'Produtos por p\xE1gina',
          'aria-label',
          'Selecione a p\xE1gina',
          1,
          'mat__paginator--table',
          3,
          'pageSizeOptions',
          'length',
          'pageSize',
          'pageIndex',
          'page',
        ],
        [1, 'mat__table--container'],
        [
          'mat-table',
          '',
          'id',
          'table1',
          'aria-describedby',
          'Tabela de listagem de produtos',
          1,
          'mat__table--products',
          'mat-elevation-z8',
          3,
          'dataSource',
        ],
        ['table', ''],
        ['matColumnDef', 'pos'],
        ['mat-header-cell', '', 4, 'matHeaderCellDef'],
        [
          'mat-cell',
          '',
          'class',
          'mat__td--event-click',
          'matRipple',
          '',
          3,
          'click',
          4,
          'matCellDef',
        ],
        ['matColumnDef', 'thumbnail'],
        ['matColumnDef', 'title'],
        ['matColumnDef', 'stock'],
        ['matColumnDef', 'brand'],
        ['matColumnDef', 'category'],
        ['matColumnDef', 'price'],
        ['mat-header-row', '', 'class', 'mat__table--head-tr', 4, 'matHeaderRowDef'],
        ['mat-row', '', 'class', 'mat__table--body-tr', 4, 'matRowDef', 'matRowDefColumns'],
        ['class', 'section__footer'],
        ['mat-header-cell', ''],
        ['mat-cell', '', 'matRipple', '', 1, 'mat__td--event-click', 3, 'click'],
        [1, 'mat__table--thumbnail', 3, 'src', 'alt'],
        [1, 'products__in--stock', 3, 'ngClass'],
        ['mat-header-row', '', 1, 'mat__table--head-tr'],
        ['mat-row', '', 1, 'mat__table--body-tr'],
        [1, 'section__footer'],
      ],
      template: function (t, i) {
        t & 1 && (m(0, 'section', 0), M(1, Xs, 39, 9), Di(2, 'async'), d()),
          t & 2 && (v(), te(1, Ii(2, 1, i.products$) ? 1 : -1))
      },
      dependencies: [
        me,
        de,
        Pi,
        Oi,
        cn,
        Xi,
        en,
        an,
        tn,
        Ji,
        rn,
        nn,
        sn,
        on,
        ln,
        qi,
        Ht,
        Te,
        Hi,
        Ki,
        Qi,
        fn,
        Re,
        Xe,
        gn,
        vt,
        ft,
      ],
      styles: [
        '.section__header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}@media (max-width: 768px){.section__header[_ngcontent-%COMP%]{width:100%;flex-direction:column;justify-content:flex-start;align-items:flex-start}}.section__header[_ngcontent-%COMP%]   .mat__paginator--table[_ngcontent-%COMP%]{background-color:transparent}.section__header[_ngcontent-%COMP%]   .section__header--group[_ngcontent-%COMP%]{display:flex;align-items:center;gap:5px}.mat__table--products[_ngcontent-%COMP%]{width:100%}.mat__table--products[_ngcontent-%COMP%]   .mat__table--head-tr[_ngcontent-%COMP%]{background-color:#eeee}.mat__table--products[_ngcontent-%COMP%]   .mat__table--body-tr[_ngcontent-%COMP%]   td.mat__td--event-click[_ngcontent-%COMP%]{cursor:pointer}.mat__table--products[_ngcontent-%COMP%]   .mat__table--body-tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#f9f9f9}.mat__table--products[_ngcontent-%COMP%]   .products__in--stock.low__stock[_ngcontent-%COMP%]{color:orange}.mat__table--products[_ngcontent-%COMP%]   .products__in--stock.critical__stock[_ngcontent-%COMP%]{color:red}.mat__table--products[_ngcontent-%COMP%]   .products__in--stock.positive__stock[_ngcontent-%COMP%]{color:green}.mat__table--products[_ngcontent-%COMP%]   .mat__table--thumbnail[_ngcontent-%COMP%]{width:100px;height:70px;object-fit:contain;object-position:center}.section__footer[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center;margin-top:5px}@media (max-width: 768px){.section__footer[_ngcontent-%COMP%]{margin-top:30px}}.section__footer[_ngcontent-%COMP%]   .mat__paginator--table[_ngcontent-%COMP%]{background-color:transparent}',
      ],
    }))
  let a = s
  return a
})()
export { Ro as default }
