<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="PopUp.aspx.cs" Inherits="FileDownload.PopUp" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <style>
        .popup {
            width:100%;
            height:100%;
            background:rgba(0,0,0,.5);
            position:absolute;
            z-index:9999;
            left:0;
            margin:0;
            padding:0;
            top:0;
            transition:ease-in-out linear 1s;
        }
        .tbModal {
            width:600px;
            height:400px;
            background:#fff;
            margin:100px auto;
        }
            .tbModal table {
                margin:100px auto;
            }
    </style>
    <form id="form1" runat="server">
        <asp:Panel runat="server" ID="panelPopup" CssClass="popup">
            <div class="tbModal">
                <table>
                <tr>
                    <td>
                        <asp:TextBox runat="server" />
                    </td>
                </tr>
                </table>
                <asp:Button Text="X" runat="server" OnClick="Unnamed_Click"/>
            </div>
        </asp:Panel>
    </form>
</body>
</html>
