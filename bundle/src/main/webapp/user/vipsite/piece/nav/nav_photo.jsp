<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<li class="<s:property value="layout.belongPage==@com.abbcc.util.constant.layout.BelongPage@PHOTO?'headerMenuLiCheck':'headerMenuLi'"/> moveMenu" >
	<s:hidden name="piece" value="%{@com.abbcc.util.constant.layout.Piece@NAV_PHOTO}"/>
	<span>
		<a href="photo">
			<s:property value="layout.jsonContent['title'][@com.abbcc.util.constant.layout.Piece@NAV_PHOTO.name()]!=null?
				layout.jsonContent['title'][@com.abbcc.util.constant.layout.Piece@NAV_PHOTO.name()]:
				#request['moduleMap'][@com.abbcc.util.constant.layout.Piece@NAV_PHOTO.name()]"/>
		</a>
	</span>
</li>