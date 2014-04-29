<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<div style="display:none;z-index: 99;" class="rel editor" id="setStyle">
	<div style="background: rgb(255, 255, 255) none repeat scroll 0% 0%; top: 0px; left: 0px; color: rgb(255, 115, 0); font-weight: bold; text-align: left; -moz-background-clip: border; -moz-background-origin: padding; -moz-background-inline-policy: continuous;" class="abs">
		<div class="setContent">
			<div id="setTopic">
				<div class="nowTopic">
					<div onmouseout="this.className='nowTopic_left';" onmouseover="this.className='nowTopic_left nowTopic_leftBg';" class="nowTopic_left"><div style="padding-top: 28px; padding-left: 35px;"><span class="b red">想让风格更有特色</span><br><span>您可以去</span><img class="pointer"  onclick="tool.expand('#setStyleDetail');" src="<s:url value="/user/vipsite/tool/images/editNowTopic.gif"/>"></div></div>
					<div onmouseout="$('#toEditLeftImg')[0].src='<s:url value="/user/vipsite/tool/images/toEditLeft.gif"/>';$('#toEditRightImg')[0].src='<s:url value="/user/vipsite/tool/images/toEditRight.gif"/>'" onmouseover="$('#toEditLeftImg')[0].src='<s:url value="/user/vipsite/tool/images/toEditLeftD.gif"/>';$('#toEditRightImg')[0].src='<s:url value="/user/vipsite/tool/images/toEditRightD.gif"/>';" class="nowTopic_middle">
						<div class="n_left"><img border="0/" src="<s:url value="/user/vipsite/tool/images/toEditLeft.gif"/>" id="toEditLeftImg"></div>
						<div class="n_middle">
							 	<div class="n_middle_d" id="nowTopicImgObj"><img class="nowTopicImg pointer" topicname="" src="<s:url value="/user/vipsite/theme/%{pageTheme.folder}/images/icon.gif"/>"></div>
							<span class="b mt5px cent block" style="width: 78px; color: rgb(202, 112, 50);">当前编辑风格</span>
						</div>
						<div class="n_right"><img border="0/" src="<s:url value="/user/vipsite/tool/images/toEditRight.gif"/>" id="toEditRightImg"></div>
					</div>
					<div onmouseout="this.className='nowTopic_right';" onmouseover="this.className='nowTopic_right nowTopic_rightBg';" class="nowTopic_right"><div style="padding-top: 28px; padding-left: 10px;"><span class="b red">为避免风格丢失，</span><span>请在</span><br><span>风格设计完成后</span><img class="pointer" onclick="mytheme.saveAs()" src="<s:url value="/user/vipsite/tool/images/saveNowTopic.gif"/>"></div></div>
				</div>
				<div class="myStyle">
					<div class="myStyleTitle mt3px"><span class="pl40px">我的风格库（最多保存5个）</span></div>
					<div class="myStyleList">
						<ul id="myStyleList">
							<s:iterator value="#request['mythemeList']">
								<li laythemeId="${laythemeId}"><a onfocus="this.blur();" onclick="mytheme.resume(this)" href="#" class="block"><img src="<s:url value="/user/vipsite/theme/%{theme.folder}/images/icon.gif"/>"></a><a href="#" class="fl delTopic" onclick="mytheme.remove(this)">删除</a></li>
							</s:iterator>
							<s:if test="#request['mythemeList']==null||#request['mythemeList'].size==0">
								<li id="emptyTips"><div><span class="b gray2">您暂时还未保存风格！</span><br><span class="gray">请在风格设计完成后及时保存，方便今后使用。</span></div></li>
							</s:if>
						</ul>
					</div>
				</div>
				<div class="createNewStyle clr">
					<img border="0" class="fl mt8px" src="<s:url value="/user/vipsite/tool/images/icon1.gif"/>"><span class="fl ml7px">您可以选择一个风格</span>
				</div>
				<div class="styleTemplate clr mt3px">
					<div class="styleTemplateList">
						<ul>
							<s:iterator value="#request['themeList']">
								<li><a onfocus="this.blur();" href="#" class="block"><img src="<s:url value="/user/vipsite/theme/%{folder}/images/icon.gif"/>" onclick="tool.transfer(this,{themeId:'${themeId}',name:'${name}',folder:'${folder}'})" ></a><span class="block ml3px">${name}</span></li>
							</s:iterator>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div style="top: -33px; left: 0px; color: rgb(255, 115, 0); font-weight: bold; text-align: left;" class="abs">
		<div class="setTitle"><span style="padding-left: 12px; padding-top: 3px; display: block;">主题风格</span></div>
	</div>
</div>