<%--
/**
 * Copyright (c) 2000-2013 Liferay, Inc. All rights reserved.
 * 
 * This library is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Lesser General Public License as published by the Free
 * Software Foundation; either version 2.1 of the License, or (at your option)
 * any later version.
 * 
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 */
--%>

<%@ include file="/html/taglib/init.jsp" %>

<%
String cssClass = GetterUtil.getString((String)request.getAttribute("liferay-ui:input-editor:cssClass"));
String editorImpl = (String)request.getAttribute("liferay-ui:input-editor:editorImpl");
String initMethod = (String)request.getAttribute("liferay-ui:input-editor:initMethod");
String name = namespace + GetterUtil.getString((String)request.getAttribute("liferay-ui:input-editor:name"));

String onChangeMethod = (String)request.getAttribute("liferay-ui:input-editor:onChangeMethod");

if (Validator.isNotNull(onChangeMethod)) {
        onChangeMethod = namespace + onChangeMethod;
}

boolean resizable = GetterUtil.getBoolean((String)request.getAttribute("liferay-ui:input-editor:resizable"));
boolean skipEditorLoading = GetterUtil.getBoolean((String)request.getAttribute("liferay-ui:input-editor:skipEditorLoading"));
%>

<c:if test="<%= !skipEditorLoading %>">
    <liferay-util:html-top outputKey="js_editor_tinymce">

        <%
        long javaScriptLastModified = ServletContextUtil.getLastModified(application, "/html/js/", true);
        %>

        <script src="<%= HtmlUtil.escape(PortalUtil.getStaticResourceURL(request, themeDisplay.getCDNHost() + themeDisplay.getPathJavaScript() + "/editor/tiny_mce/tiny_mce.min.js", javaScriptLastModified)) %>" type="text/javascript"></script>

        <script type="text/javascript">
            Liferay.namespace('EDITORS')['<%= editorImpl %>'] = true;
        </script>
    </liferay-util:html-top>
</c:if>

<div class="<%= cssClass %>">
    <textarea id="<%= name %>" name="<%= name %>" style="height: 100%; width: 100%;"></textarea>
</div>

<aui:script>
    window['<%= name %>'] = {
    onChangeCallbackCounter: 0,

    destroy: function() {
    tinyMCE.editors['<%= name %>'].destroy();

    window['<%= name %>'] = null;
    },

    focus: function() {
    tinyMCE.editors['<%= name %>'].focus();
    },

    fileBrowserCallback: function(field_name, url, type) {
    },

    getHTML: function() {
    return tinyMCE.editors['<%= name %>'].getContent();
    },

    init: function(value) {
    if (typeof value != 'string') {
    value = '';
    }

    window['<%= name %>'].setHTML(value);
    },

    initInstanceCallback: function() {
    <c:if test="<%= Validator.isNotNull(initMethod) %>">
        window['<%= name %>'].init(<%= HtmlUtil.escape(namespace + initMethod) %>());
    </c:if>
    },

    <%
    if (Validator.isNotNull(onChangeMethod)) {
    %>

    onChangeCallback: function(tinyMCE) {

    // This purposely ignores the first callback event because each
    // call
    // to setContent triggers an undo level which fires the callback
    // when no changes have yet been made.

    // setContent is not really the correct way of initializing this
    // editor with content. The content should be placed statically
    // (from the editor's perspective) within the textarea. This is
    // a
    // problem from the portal's perspective because it's passing
    // the
    // content via a javascript method (initMethod).

    var onChangeCallbackCounter = window['<%= name %>'].onChangeCallbackCounter;

    if (onChangeCallbackCounter > 0) {

    <%= HtmlUtil.escapeJS(onChangeMethod) %>(window['<%= name %>'].getHTML());

    }

    onChangeCallbackCounter++;
    },

    <%
    }
    %>

    setHTML: function(value) {
    tinyMCE.editors['<%= name %>'].setContent(value);
    }
    };


    tinyMCE.init(
    {
    convert_urls: false,
    elements: '<%= name %>',    
    file_browser_callback: window['<%= name %>'].fileBrowserCallback,
    init_instance_callback: window['<%= name %>'].initInstanceCallback,    
//    language: '<%= HtmlUtil.escape(locale.getLanguage()) %>',    
    <%
                        if (Validator.isNotNull(onChangeMethod)) {
    %>

    onchange_callback: window['<%= name %>'].onChangeCallback,

    <%
    }
    %>
    
	extended_valid_elements: 'a[name|id|href|target|title|onclick|class|style|data-map-lat|data-map-long|data-map-title|data-map-description],img[class|src|border=0|alt|title|hspace|vspace|width|height|align|onmouseover|onmouseout|name|usemap|onload],hr[class|width|size|noshade],font[face|size|color|style],span[class|align|style],div[id|style|data-*|class|*],*[*]',
               invalid_elements: '',

               mode: 'exact',
               plugins: [
             "advlist autolink link image lists charmap print preview hr anchor pagebreak",
             "searchreplace wordcount visualblocks visualchars insertdatetime media nonbreaking spellchecker",
             "table contextmenu directionality emoticons paste textcolor youtube codemirror responsivefilemanager filemanager"
               ],
               codemirror: {
                   indentOnInit: true, // Whether or not to indent code on init.
                   path: 'CodeMirror'
               },
               filemanager_title: "Responsive Filemanager",
               filemanager_crossdomain: true,
               external_filemanager_path: "http://aka-cdn.uce.edu.ec/atenea/filemanager/",               
               image_advtab: true,
               relative_urls: false,
               remove_script_host: false,
               theme: 'modern',
               verify_html: false,
               cleanup: false,
               valid_children: 'a[div|span|script|i|small|p],+div[a|span|p|div|i|style|script|ul|li|form|input|h1|h2|h3|h4|h5|h6|h7|label|img|button|nav|canvas|footer|*],*[*]',
               toolbar1: "undo redo | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | styleselect",             
               toolbar2: "| responsivefilemanager image media | link unlink anchor | preview code  | youtube forecolor backcolor"

    });

</aui:script>
