import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'primeng/accordion';
import { AnimateModule } from 'primeng/animate';
import { ConfirmationService, FilterService, MessageService } from 'primeng/api';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AutoFocusModule } from 'primeng/autofocus';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipModule } from 'primeng/chip';
import { ChipsModule } from 'primeng/chips';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DockModule } from 'primeng/dock';
import { DragDropModule } from 'primeng/dragdrop';
import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { EditorModule } from 'primeng/editor';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { FocusTrapModule } from 'primeng/focustrap';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule } from 'primeng/keyfilter';
import { KnobModule } from 'primeng/knob';
import { ListboxModule } from 'primeng/listbox';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MessagesModule } from 'primeng/messages';
import { MultiSelectModule } from 'primeng/multiselect';
import { OrderListModule } from 'primeng/orderlist';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { OverlayModule } from 'primeng/overlay';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PaginatorModule } from 'primeng/paginator';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PasswordModule } from 'primeng/password';
import { PickListModule } from 'primeng/picklist';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { ScrollerModule } from 'primeng/scroller';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { SkeletonModule } from 'primeng/skeleton';
import { SliderModule } from 'primeng/slider';
import { SpeedDialModule } from 'primeng/speeddial';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SplitterModule } from 'primeng/splitter';
import { StepsModule } from 'primeng/steps';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { TimelineModule } from 'primeng/timeline';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';
import { TreeSelectModule } from 'primeng/treeselect';
import { TreeTableModule } from 'primeng/treetable';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundCloudsComponent } from './components/background-clouds/background-clouds.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuLateralCadastroComponent } from './components/menu-lateral/cadastro/menu-lateral-cadastro.component';
import { MenuLateralEventosComponent } from './components/menu-lateral/eventos/menu-lateral-eventos.component';
import { MenuLateralFaturamentoComponent } from './components/menu-lateral/faturamento/menu-lateral-faturamento.component';
import { MenuLateralRankingComponent } from './components/menu-lateral/ranking/menu-lateral-ranking.component';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { TerminalComponent } from './components/terminal/terminal.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { TipoEventosComponent } from './pages/eventos/tipo/tipo_eventos.component';
import { IndexComponent } from './pages/index/index.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ColaboradorService } from './services/colaborador.service';
import { ContatoService } from './services/contato.service';
import { EmpresaService } from './services/empresa.service';
import { EnderecoService } from './services/endereco.service';
import { EventoService } from './services/evento.service';
import { ImagemService } from './services/imagem.service';
import { IngressoService } from './services/ingresso.service';
import { ParceiroService } from './services/parceiro.service';
import { ProdutoService } from './services/produto.service';
import { RegraService } from './services/regras.service';
import { UsuarioService } from './services/usuario.service';
import { PermissoesService } from './utils/permissoes.list';
import { PlanoContratadoService } from './services/plano_contratado.service';
import { ClienteService } from './services/cliente.service';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { ParaEmpresasComponent } from './pages/para_empresas/para_empresas.component';
import { ParceirosComponent } from './pages/parceiros/parceiros.component';
import { PesquisaComponent } from './pages/pesquisa/pesquisa.component';
import { ProgramacaoComponent } from './pages/programacao/programacao.component';
import { PromocoesComponent } from './pages/promocoes/promocoes.component';
import { MenuParceirosComponent } from './components/menu-parceiros/menu-parceiros.component';
import { MenuPesquisaComponent } from './components/menu-pesquisa/menu-pesquisa.component';
import { MenuPesquisaLateralComponent } from './components/menu-pesquisa_lateral/menu-pesquisa_lateral.component';
import { MenuPesquisaParceirosComponent } from './components/menu-pesquisa-parceiros/menu-pesquisa-parceiros.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
    MenuParceirosComponent,
    MenuLateralCadastroComponent,
    MenuLateralRankingComponent,
    MenuLateralFaturamentoComponent,
    MenuLateralEventosComponent,
    MenuPesquisaComponent,
    MenuPesquisaLateralComponent,
    MenuPesquisaParceirosComponent,
    TerminalComponent,
    FooterComponent,
    BackgroundCloudsComponent,
    IndexComponent,
    PerfilComponent,
    EventosComponent,
    TipoEventosComponent,
    CarrinhoComponent,
    FavoritosComponent,
    ParaEmpresasComponent,
    ParceirosComponent,
    PesquisaComponent,
    ProgramacaoComponent,
    PromocoesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    DockModule,
    ButtonModule,
    BrowserAnimationsModule,
    AutoCompleteModule,
    CalendarModule,
    CascadeSelectModule,
    CheckboxModule,
    ChipsModule,
    ColorPickerModule,
    DropdownModule,
    EditorModule,
    InputTextModule,
    RadioButtonModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextareaModule,
    InputNumberModule,
    KnobModule,
    KeyFilterModule,
    ListboxModule,
    MultiSelectModule,
    PasswordModule,
    RatingModule,
    SelectButtonModule,
    SliderModule,
    TreeSelectModule,
    ToggleButtonModule,
    SplitButtonModule,
    SpeedDialModule,
    TableModule,
    ScrollerModule,
    OrderListModule, 
    OrganizationChartModule, 
    PaginatorModule,
    PickListModule,
    TreeModule,
    TreeTableModule, 
    TimelineModule,
    AccordionModule, 
    CardModule,
    DividerModule, 
    FieldsetModule, 
    PanelModule,
    SplitterModule, 
    ScrollPanelModule, 
    TabViewModule,
    ToolbarModule,
    ConfirmDialogModule, 
    DialogModule,
    DynamicDialogModule, 
    OverlayPanelModule,
    SidebarModule,
    TooltipModule,
    FileUploadModule, 
    BreadcrumbModule,
    MenuModule,
    MenubarModule, 
    MegaMenuModule, 
    PanelMenuModule, 
    StepsModule,
    TabMenuModule, 
    TieredMenuModule, 
    ChartModule,
    MessagesModule, 
    ToastModule,
    CarouselModule, 
    GalleriaModule,
    ImageModule,
    DragDropModule, 
    AvatarModule,
    BadgeModule, 
    ChipModule,
    ScrollTopModule, 
    SkeletonModule, 
    ProgressBarModule, 
    ProgressSpinnerModule, 
    FocusTrapModule, 
    RippleModule, 
    AutoFocusModule, 
    AnimateModule, 
    OverlayModule, 
     
  ],
  providers: [
    FilterService,
    MessageService, 
    ConfirmationService,
    ColaboradorService,
    EventoService,
    EmpresaService, 
    ImagemService,
    IngressoService,
    ProdutoService,
    EnderecoService,
    ContatoService,
    UsuarioService,
    RegraService,
    ParceiroService,
    PermissoesService,
    ClienteService,
    PlanoContratadoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
